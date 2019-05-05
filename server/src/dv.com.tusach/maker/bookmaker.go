package maker

import (
	"errors"
	"io/ioutil"
	"os"
	"strconv"
	"sync"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
)

type BookMaker struct {
	db           persistence.Persistence
	mux          *sync.Mutex
	abortedBooks map[int32]bool
}

type ScriptEngine struct {
	jsVM       *otto.Otto
	script     *otto.Script
	beginFn    otto.Value
	endFn      otto.Value
	startTagFn otto.Value
	endTagFn   otto.Value
	textFn     otto.Value
}

func NewBookMaker(db persistence.Persistence) *BookMaker {
	bookMaker := BookMaker{}
	bookMaker.db = db
	bookMaker.mux = &sync.Mutex{}
	bookMaker.abortedBooks = make(map[int32]bool)
	return &bookMaker
}

func (bookMaker *BookMaker) Compile(scriptData []byte) (*ScriptEngine, error) {
	if scriptData == nil {
		return nil, errors.New("missing argument")
	}
	engine := new(ScriptEngine)
	engine.jsVM = otto.New()
	logger.Infof("Compiling script...\n")
	script, err := engine.jsVM.Compile("", scriptData)
	if err != nil {
		logger.Errorf("Error compiling script: %s", err)
		return nil, err
	}
	engine.script = script
	// check if this is needed
	//engine.jsVM.Run(engine.script)

	engine.jsVM.Set("logDebug", func(call otto.FunctionCall) otto.Value {
		logger.Debug(call.Argument(0).String())
		return otto.Value{}
	})

	engine.jsVM.Set("logInfo", func(call otto.FunctionCall) otto.Value {
		logger.Info(call.Argument(0).String())
		return otto.Value{}
	})

	engine.jsVM.Set("logError", func(call otto.FunctionCall) otto.Value {
		logger.Error(call.Argument(0).String())
		return otto.Value{}
	})

	logger.Info("script compiled succesffuly!")
	return engine, nil
}

func (bookMaker *BookMaker) GetBookSites() []string {
	return []string{"www.truyencuatui.net"}
}

func (bookMaker *BookMaker) AbortBook(bookId int32) error {
	bookMaker.mux.Lock()
	defer bookMaker.mux.Unlock()
	current := bookMaker.db.GetBook(bookId)
	if current.Id == 0 {
		return errors.New("Book " + strconv.Itoa(int(bookId)) + " not found")
	}
	if current.Status == model.BookStatusType_IN_PROGRESS {
		logger.Infof("aborting book: '%s'", current.Title)
		bookMaker.abortedBooks[bookId] = true
	} else {
		logger.Warnf("cannot abort book: '%s' due to unexpected status %d", current.Title, current.Status)
	}
	return nil
}

func (bookMaker *BookMaker) ResumeBook(bookId int32) error {
	bookMaker.mux.Lock()
	defer bookMaker.mux.Unlock()
	current := bookMaker.db.GetBook(bookId)
	if current.Id == 0 {
		return errors.New("Book " + strconv.Itoa(int(bookId)) + " not found")
	}
	if current.Status == model.BookStatusType_IN_PROGRESS {
		return errors.New("Book " + strconv.Itoa(int(bookId)) + " is currently in progress")
	}
	current.Status = model.BookStatusType_IN_PROGRESS
	_, err := bookMaker.saveBook(&current)
	if err != nil {
		return nil
	}
	return bookMaker.CreateBook(current)
}

func (bookMaker *BookMaker) UpdateBook(book model.Book) error {
	bookMaker.mux.Lock()
	defer bookMaker.mux.Unlock()
	current := bookMaker.db.GetBook(book.Id)
	if current.Id == 0 {
		return errors.New("Book " + strconv.Itoa(int(book.Id)) + " not found")
	}
	if current.Status == model.BookStatusType_IN_PROGRESS {
		return errors.New("Book " + strconv.Itoa(int(book.Id)) + " is currently in progress")
	}
	if current.Status != book.Status {
		return errors.New("Cannot update book to different status!")
	}
	// allow updating fields: title, author, currentPageUrl
	current.Title = book.Title
	current.Author = book.Author
	current.CurrentPageUrl = book.CurrentPageUrl
	current.CurrentPageNo = book.CurrentPageNo

	_, err := bookMaker.saveBook(&current)
	return err
}

func (bookMaker *BookMaker) CreateBook(book model.Book) error {
	current := book
	if book.Id != 0 {
		current = bookMaker.GetBook(book.Id)
	}
	current.Status = model.BookStatusType_IN_PROGRESS
	current.CreatedTime = util.TimestampNow()
	bookId, err := bookMaker.saveBook(&current)
	current.Id = int32(bookId)

	data, err := ioutil.ReadFile(util.GetParserFile())
	if err != nil {
		logger.Errorf("Failed to load js: %s\n", err)
		return err
	}

	engine, err := bookMaker.Compile(data)
	if err != nil {
		logger.Errorf("Error compiling parser.js: %s\n", err.Error())
		return err
	}
	go bookMaker.makeBook(engine, current.Id)
	return nil
}

func (bookMaker *BookMaker) GetBooks(includeDeleted bool) []model.Book {
	return bookMaker.db.GetBooks(includeDeleted)
}

func (bookMaker *BookMaker) GetBook(id int32) model.Book {
	return bookMaker.db.GetBook(id)
}

func (bookMaker *BookMaker) DeleteBook(bookId int32) error {
	bookMaker.mux.Lock()
	defer bookMaker.mux.Unlock()
	current := bookMaker.db.GetBook(bookId)
	if current.Id == 0 {
		return errors.New("Book " + strconv.Itoa(int(bookId)) + " not found")
	}
	if current.Status == model.BookStatusType_IN_PROGRESS {
		return errors.New("Book " + strconv.Itoa(int(bookId)) + " is currently in progress")
	}
	return bookMaker.db.DeleteBook(bookId)
}

func (bookMaker *BookMaker) GetSystemInfo() model.SystemInfo {
	return bookMaker.db.GetSystemInfo()
}

func (bookMaker *BookMaker) makeBook(engine *ScriptEngine, bookId int32) {
	var numPagesLoaded = 0
	var err error

	book := bookMaker.GetBook(bookId)
	if book.Status != model.BookStatusType_IN_PROGRESS {
		logger.Errorf("Unexpected book status: %v", book.Status)
		return
	}
	if book.Id == 0 {
		logger.Errorf("Could not find book: %d", bookId)
		return
	}
	url := book.CurrentPageUrl
	if url == "" {
		url = book.StartPageUrl
	}

	// TODO set loader configuration
	err = persistence.InitBookDir(book)
	if err != nil {
		return
	}
	defer func() {
		persistence.RemoveBookDir(book)
	}()

	bookMaker.abortedBooks[book.Id] = false
	defer func() {
		logger.Infof("makeBook - finished making '%s'", book.Title)
		bookMaker.abortedBooks[book.Id] = false
	}()

	for {
		// reload book to check change to book status
		book = bookMaker.GetBook(bookId)
		if bookMaker.abortedBooks[book.Id] || book.MaxNumPages > 0 && book.MaxNumPages <= book.CurrentPageNo {
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}
		newChapter := model.Chapter{BookId: book.Id, ChapterNo: newChapterNo}
		nextPageUrl, err := bookMaker.DownloadChapter(engine, url, &newChapter)

		if err != nil {
			logger.Errorf("%s - Failed to load chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		if newChapter.Title == "" {
			newChapter.Title = "model.Chapter " + strconv.Itoa(int(newChapter.ChapterNo))
		}
		logger.Infof("%s - Completed chapter: %d (%s), nextPageUrl: %s\n", book.Title, newChapter.ChapterNo, newChapter.Title, nextPageUrl)

		err = bookMaker.db.SaveChapter(newChapter)
		if err != nil {
			logger.Errorf("%s - Failed to save chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		book.CurrentPageNo = newChapterNo
		book.CurrentPageUrl = url
		numPagesLoaded++

		// check for abort before saving
		if bookMaker.abortedBooks[book.Id] {
			break
		}
		_, err = bookMaker.saveBook(&book)
		if err != nil {
			logger.Errorf("%s - Failed to save book to DB: %s", book.Title, err)
			return
		}

		// check for no more pages
		if nextPageUrl == "" {
			logger.Info("No more next page url found.")
			break
		}

		if nextPageUrl == url {
			logger.Errorf("Internal error. next page url is same as current page url: %s", url)
			break
		}
		url = nextPageUrl
	}

	if err != nil {
		book.Status = model.BookStatusType_ERROR
		book.ErrorMsg = err.Error()
	} else if bookMaker.abortedBooks[book.Id] {
		book.Status = model.BookStatusType_ABORTED
	} else {
		book.Status = model.BookStatusType_COMPLETED
	}

	bookMaker.saveBook(&book)

	return
}

func (bookMaker *BookMaker) DownloadChapter(engine *ScriptEngine, chapterUrl string, chapter *model.Chapter) (string, error) {
	rawFilename := persistence.GetRawChapterFilename(*chapter)
	filename := persistence.GetChapterFilename(*chapter)

	chapterTitle, nextChapterURL, err := bookMaker.Parse(engine, chapterUrl, rawFilename, filename, 10, 2)
	if err != nil {
		return "", err
	}
	chapter.Title = chapterTitle
	os.Remove(rawFilename)

	return nextChapterURL, nil
}

func (bookMaker *BookMaker) saveBook(book *model.Book) (retId int, retErr error) {
	book.LastUpdatedTime = util.TimestampNow()
	book.EpubCreated = util.IsExist(persistence.GetBookEpubFilename(*book))

	id, err := bookMaker.db.SaveBook(book)
	if err == nil {
		if book.Id <= 0 {
			book.Id = int32(id)
			logger.Infof("created book - %v", book)
		} else {
			logger.Infof("updated book - %v", book)
		}
		util.GetEventManager().Push(util.EventData{Channel: "BOOK-CHANNEL", Type: "update", Data: *book})
	} else {
		logger.Errorf("error saving book: %s", err.Error())
	}
	return id, err
}
