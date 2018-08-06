package test

import (
	"io/ioutil"
	"os"
	"testing"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	_ "github.com/cznic/ql/driver"
)

type Bookmaker_Test struct {
	configFile string
	parserFile string
	bookMaker  maker.BookMaker
}

func TestBookmaker(t *testing.T) {
	logger.Info("Starting tests...")
	o := Bookmaker_Test{configFile: "config-test.json", parserFile: "../../../library/parser.js"}

	o.setup(t)
	defer func() {
		o.cleanup(t)
	}()
	o.testCreateBook(t)
}

func (o *Bookmaker_Test) setup(t *testing.T) {
	util.GetEventManager().StartListening("BOOK-CHANNEL", o)

	// set configuration
	util.LoadConfig(o.configFile)

	// delete existing db
	if util.GetConfiguration().DBFilename == "" {
		t.Errorf("Missing DBFilename in configuration file: " + o.configFile)
		t.FailNow()
	}
	os.Remove(util.GetConfiguration().DBFilename)

	// create database
	db := persistence.Ql{}
	db.InitDB()

	// set the database
	o.bookMaker.DB = &db
}

func (o *Bookmaker_Test) cleanup(t *testing.T) {
	logger.Info("clean up...")
	if o.bookMaker.DB != nil {
		util.GetEventManager().StopListening(o)
		o.bookMaker.DB.CloseDB()
	}
}

func (sink *Bookmaker_Test) ProcessEvent(event util.EventData) {
	logger.Infof("Received event: %s (%v)", event.Type, event.Data)
	book, ok := event.Data.(*persistence.Book)
	if ok {
		logger.Infof("Received book event: %v", book)
	}
}

func (o *Bookmaker_Test) testCreateBook(t *testing.T) {
	engine := o.createEngine(t)
	newBook := persistence.Book{}
	newBook.Title = "Trach Thien Ky"
	newBook.Author = "Mieu Ni"
	newBook.CreatedBy = "Dung Van"
	newBook.StartPageUrl = "http://truyencuatui.net/truyen/trach-thien-ky/quyen-i-dong-hoc-thieu-nien-chuong-1-ta-doi-y/317713.html"
	newBook.MaxNumPages = 3
	newBook.Status = persistence.STATUS_WORKING
	newBook.CreatedTime = time.Now()
	bookId, err := o.bookMaker.DB.SaveBook(newBook)
	if err != nil {
		t.Errorf("Error saving book: %s", err.Error())
		t.FailNow()
	}
	newBook.ID = bookId
	logger.Infof("created book ID: %d\n", newBook.ID)
	o.bookMaker.CreateBook(engine, &newBook)
}

func (o *Bookmaker_Test) createEngine(t *testing.T) *maker.ScriptEngine {
	data, err := ioutil.ReadFile(o.parserFile)
	if err != nil {
		t.Errorf("Failed to load %s: %s\n", o.parserFile, err)
		t.FailNow()
	}

	engine, err := maker.Compile(data)
	if err != nil {
		t.Errorf("Error compiling parser.js: %s\n", err.Error())
		t.FailNow()
	}
	return engine
}
