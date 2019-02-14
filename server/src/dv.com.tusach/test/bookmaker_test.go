package test

import (
	"io/ioutil"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
)

type EventSink struct {
}

func TestBookmaker(t *testing.T) {
	logger.Info("Starting TestBookmaker...")
	eventSink := EventSink{}
	util.GetEventManager().StartListening("BOOK-CHANNEL", &eventSink)
	// set configuration
	util.LoadConfig("config-test.json")
	// create database
	db := persistence.FileDB{}
	db.InitDB()
	bookMaker := maker.BookMaker{DB: &db}
	defer func() {
		logger.Info("Clean up TestBookmaker...")
		if bookMaker.DB != nil {
			util.GetEventManager().StopListening(&eventSink)
			bookMaker.DB.CloseDB()
		}
	}()

	engine := createEngine(t)
	newBook := model.Book{}
	newBook.CreatedBy = "Dung Van"
	//newBook.Title = "Trach Thien Ky"
	//newBook.StartPageUrl = "http://truyencuatui.net/truyen/trach-thien-ky/quyen-i-dong-hoc-thieu-nien-chuong-1-ta-doi-y/317713.html"
	newBook.Title = "Thien Tinh Chi Lo"
	newBook.StartPageUrl = "https://truyencv.com/thien-tinh-chi-lo/chuong-1/"
	newBook.MaxNumPages = 3
	newBook.Status = model.BookStatusType_IN_PROGRESS
	newBook.CreatedTime = util.TimestampNow()
	bookId, err := bookMaker.DB.SaveBook(&newBook)
	if err != nil {
		t.Errorf("Error saving book: %s", err.Error())
		t.FailNow()
	}
	logger.Infof("created book ID: %d\n", newBook.ID)
	if newBook.ID == 0 || newBook.ID != int32(bookId) {
		t.Errorf("Invalid book id: %d", newBook.ID)
		t.FailNow()
	}

	err = bookMaker.CreateBook(engine, &newBook)
	if err != nil {
		t.Errorf("Error creating book: %s", err.Error())
		t.FailNow()
	}
}

func (sink *EventSink) ProcessEvent(event util.EventData) {
	logger.Infof("Received event: %s (%v)", event.Type, event.Data)
	book, ok := event.Data.(*model.Book)
	if ok {
		logger.Infof("Received book event: %v", book)
	}
}

func createEngine(t *testing.T) *maker.ScriptEngine {
	data, err := ioutil.ReadFile(util.GetParserFile())
	if err != nil {
		t.Errorf("Failed to load parser file %s: %s\n", util.GetParserFile(), err)
		t.FailNow()
	}

	engine, err := maker.Compile(data)
	if err != nil {
		t.Errorf("Error compiling parser.js: %s\n", err.Error())
		t.FailNow()
	}
	return engine
}
