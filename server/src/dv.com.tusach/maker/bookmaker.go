package maker

import (
	"errors"
	"fmt"
	"net/url"
	"strconv"
	"sync"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
)

type BookMaker struct {
	db           persistence.Persistence
	mux          *sync.Mutex
	abortedBooks map[int32]bool
}

func NewBookMaker(db persistence.Persistence) *BookMaker {
	bookMaker := BookMaker{}
	bookMaker.db = db
	bookMaker.mux = &sync.Mutex{}
	bookMaker.abortedBooks = make(map[int32]bool)
	return &bookMaker
}

func (bookMaker *BookMaker) CreateContentLoader(chapterUrl string) (*ContentLoader, error) {
	// get the domain from the url
	u, err := url.Parse(chapterUrl)
	if err != nil {
		return nil, fmt.Errorf("Invalid chapterUrl: %s. %w", chapterUrl, err)
	}

	contentLoader := ContentLoader{Hostname: u.Hostname()}
	err = contentLoader.Init()
	if err != nil {
		return nil, err
	}
	return &contentLoader, nil
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
		current.Status = model.BookStatusType_ABORTED
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

	loader, err := bookMaker.CreateContentLoader(current.StartPageUrl)
	if err != nil {
		logger.Errorf("Error compiling parser.js: %s\n", err.Error())
		return err
	}
	go bookMaker.MakeBook(loader, &current)
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

func (bookMaker *BookMaker) MakeBook(loader *ContentLoader, book *model.Book) (err error) {
	var numPagesLoaded = 0
	err = nil

	bookMaker.abortedBooks[book.Id] = false
	defer func() {
		if book.Id != 0 {
			if err != nil {
				book.Status = model.BookStatusType_ERROR
				book.ErrorMsg = err.Error()
				logger.Errorf("makeBook - error during making '%s' - %s", book.Title, book.ErrorMsg)
			} else if bookMaker.abortedBooks[book.Id] {
				logger.Infof("makeBook - abort making '%s'", book.Title)
				book.Status = model.BookStatusType_ABORTED
				book.ErrorMsg = ""
			} else {
				book.ErrorMsg = ""
				book.Status = model.BookStatusType_COMPLETED
				logger.Infof("makeBook - finished making '%s'", book.Title)
			}
			bookMaker.saveBook(book)
			persistence.RemoveBookDir(*book)
		}
	}()

	if book.Status != model.BookStatusType_IN_PROGRESS {
		err = fmt.Errorf("book %d has invalid status: %v", book.Id, book.Status)
		return
	}

	if book.Id == 0 {
		err = fmt.Errorf("Could not find book: %d", book.GetId())
		return
	}
	url := book.CurrentPageUrl
	if url == "" {
		url = book.StartPageUrl
	}

	// TODO set loader configuration
	err = persistence.InitBookDir(*book)
	if err != nil {
		return
	}
	err = loader.Init()
	if err != nil {
		return
	}

	for {
		if bookMaker.abortedBooks[book.Id] || book.MaxNumPages > 0 && book.MaxNumPages <= book.CurrentPageNo {
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}
		downloadedChapter, err2 := loader.DownloadChapter(int(book.Id), int(newChapterNo), url)
		if err2 != nil {
			logger.Errorf("%s\n", err.Error)
			break
		}

		newChapter := model.Chapter{BookId: book.Id, ChapterNo: newChapterNo, Title: downloadedChapter.ChapterTitle}

		if downloadedChapter.ChapterHmtlRaw != "" {
			rawFilename := persistence.GetRawChapterFilename(newChapter)
			// save raw file
			if err = util.SaveFile(rawFilename, []byte(downloadedChapter.ChapterHmtlRaw)); err != nil {
				break
			}
		} else {
			err = errors.New("Missing raw chapter html!")
			break
		}
		if downloadedChapter.ChapterHtml != "" {
			filename := persistence.GetChapterFilename(newChapter)
			// save html file
			err = util.SaveFile(filename, []byte(downloadedChapter.ChapterHtml))
			if err != nil {
				logger.Errorf("%s\n", err.Error)
				break
			}
		} else {
			err = errors.New("Missing chapter html!")
			break
		}

		// TODO remove when finish debuging
		//defer os.Remove(rawFilename)

		logger.Infof("%s - Completed chapter: %d (%s), nextPageUrl: %s\n", book.Title,
			newChapter.ChapterNo, newChapter.Title, downloadedChapter.NextChapterUrl)

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
		_, err = bookMaker.saveBook(book)
		if err != nil {
			logger.Errorf("%s - Failed to save book to DB: %s", book.Title, err)
			return
		}

		// check for no more pages
		if downloadedChapter.NextChapterUrl == "" {
			logger.Info("No more next page url found.")
			break
		}

		if downloadedChapter.NextChapterUrl == url {
			logger.Errorf("Internal error. next page url is same as current page url: %s", url)
			break
		}
		url = downloadedChapter.NextChapterUrl
	}

	return err
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
