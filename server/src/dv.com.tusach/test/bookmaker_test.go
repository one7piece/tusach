package test

import (
	"testing"
	"time"

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
	bookMaker := maker.NewBookMaker(&db)
	defer func() {
		logger.Info("Clean up TestBookmaker...")
		util.GetEventManager().StopListening(&eventSink)
	}()

	newBook := model.Book{}
	newBook.CreatedBy = "Dung Van"
	//newBook.Title = "Trach Thien Ky"
	//newBook.StartPageUrl = "http://truyencuatui.net/truyen/trach-thien-ky/quyen-i-dong-hoc-thieu-nien-chuong-1-ta-doi-y/317713.html"
	//newBook.Title = "Thien Tinh Chi Lo"
	//newBook.StartPageUrl = "https://truyencv.com/thien-tinh-chi-lo/chuong-956/"
	newBook.Title = "Kiem Lai"
	newBook.StartPageUrl = "https://truyenyy.com/truyen/kiem-lai-phong-hoa-hi-chu-hau-ban-dich/chuong-1.html"
	//newBook.CurrentPageUrl = "https://truyenyy.com/truyen/kiem-lai-phong-hoa-hi-chu-hau-ban-dich/chuong-1.html"
	newBook.MaxNumPages = 10
	newBook.Status = model.BookStatusType_IN_PROGRESS
	newBook.CreatedTime = util.TimestampNow()
	err := bookMaker.CreateBook(newBook)
	if err != nil {
		t.Errorf("Error creating book: %s", err.Error())
		t.FailNow()
	}
	time.Sleep(60 * time.Second)
}

func (sink *EventSink) ProcessEvent(event util.EventData) {
	logger.Infof("Received event: %s (%v)", event.Type, event.Data)
	book, ok := event.Data.(*model.Book)
	if ok {
		logger.Infof("Received book event: %v", book)
	}
}
