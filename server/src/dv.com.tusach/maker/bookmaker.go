package maker

import (
	"errors"
	"os"
	"strconv"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
)

type BookMaker struct {
	DB persistence.Persistence
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

func Compile(scriptData []byte) (*ScriptEngine, error) {
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

func (bookMaker BookMaker) GetBookSites() []string {
	return []string{"www.truyencuatui.net"}
}

func (bookMaker BookMaker) CreateBook(engine *ScriptEngine, book *model.Book) error {
	var numPagesLoaded = 0
	var err error

	url := book.CurrentPageUrl
	if url == "" {
		url = book.StartPageUrl
	}

	// TODO set loader configuration
	err = persistence.InitBookDir(*book)
	if err != nil {
		return err
	}
	defer func() {
		persistence.RemoveBookDir(*book)
	}()

	for {
		if book.Status == model.BookStatusType_ABORTED || book.MaxNumPages > 0 && book.MaxNumPages <= book.CurrentPageNo {
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}
		newChapter := model.Chapter{BookId: book.ID, ChapterNo: newChapterNo}
		nextPageUrl, err := bookMaker.DownloadChapter(engine, url, &newChapter)

		if err != nil {
			logger.Errorf("%s - Failed to load chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		if newChapter.Title == "" {
			newChapter.Title = "model.Chapter " + strconv.Itoa(int(newChapter.ChapterNo))
		}
		logger.Infof("%s - Completed chapter: %d (%s), nextPageUrl: %s\n", book.Title, newChapter.ChapterNo, newChapter.Title, nextPageUrl)

		err = bookMaker.DB.SaveChapter(newChapter)
		if err != nil {
			logger.Errorf("%s - Failed to save chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		book.CurrentPageNo = newChapterNo
		book.CurrentPageUrl = url
		numPagesLoaded++

		_, err = bookMaker.SaveBook(book)
		if err != nil {
			logger.Errorf("%s - Failed to save book to DB: %s", book.Title, err)
			return err
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
	} else if book.Status != model.BookStatusType_ABORTED {
		book.Status = model.BookStatusType_COMPLETED
	}
	bookMaker.SaveBook(book)

	return err
}

func (bookMaker BookMaker) DownloadChapter(engine *ScriptEngine, chapterUrl string, chapter *model.Chapter) (string, error) {
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

func (bookMaker BookMaker) SaveBook(book *model.Book) (retId int, retErr error) {
	book.LastUpdatedTime = util.TimestampNow()
	book.EpubCreated = util.IsExist(persistence.GetBookEpubFilename(*book))

	id, err := bookMaker.DB.SaveBook(book)
	if err == nil {
		defer func() {
			if err := recover(); err != nil {
				logger.Infof("Recover from panic: %s\n", err)
				retErr = util.ExtractError(err)
				retId = 0
			}
		}()

		if book.ID <= 0 {
			book.ID = int32(id)
			logger.Infof("created book - %v", book)
		} else {
			logger.Infof("updated book - %v", book)
		}
		util.GetEventManager().Push(util.EventData{Channel: "BOOK-CHANNEL", Type: "update", Data: book})
	}
	return id, err
}
