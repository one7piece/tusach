package test

import (
	"fmt"
	"testing"

	"github.com/golang/protobuf/ptypes"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	_ "github.com/cznic/ql/driver"
)

const FILENAME = "./ql_test.db"

func TestSystemInfo(t *testing.T) {
	fmt.Println("TestSystemInfo...")

	util.LoadConfig("config-test.json")
	db := persistence.Ql{}
	db.InitDB()

	defer func() {
		logger.Info("Closing database")
		db.CloseDB()
	}()

	info, err := db.GetSystemInfo(true)
	if err != nil {
		t.Errorf("Error loading system info: %s", err)
		return
	}
	logger.Infof("Loaded system info: %v", info)

	now := ptypes.TimestampNow()
	db.SaveSystemInfo(model.SystemInfo{SystemUpTime: now, BookLastUpdatedTime: now})

	info, err = db.GetSystemInfo(true)
	if err != nil {
		t.Errorf("Error loading system info: %s", err)
		return
	}
	logger.Infof("Loaded system info: %v", info)
}

func TestUser(t *testing.T) {
	fmt.Println("TestUser...")

	util.LoadConfig("config-test.json")
	db := persistence.Ql{}
	db.InitDB()

	defer func() {
		logger.Info("Closing database")
		db.CloseDB()
	}()

	users, err := db.LoadUsers()
	if err != nil {
		t.Errorf("Error loading users: %s", err)
		return
	}
	for _, user := range users {
		logger.Infof("Loaded user: %v", user)
	}

	testUser := model.User{Name: "test", Roles: "user,test"}
	err = db.SaveUser(testUser)
	if err != nil {
		t.Errorf("Error saving user: %s", err)
		return
	}

	users, err = db.LoadUsers()
	if err != nil {
		t.Errorf("Error reloading users: %s", err)
		return
	}

	for _, user := range users {
		logger.Infof("Reloaded user: %v", user)
	}
}

func TestBook(t *testing.T) {
	fmt.Println("TestBook...")

	util.LoadConfig("config-test.json")
	db := persistence.Ql{}
	db.InitDB()

	defer func() {
		logger.Info("Closing database")
		db.CloseDB()
	}()

	books, err := db.LoadBooks()
	if err != nil {
		t.Errorf("Error loading books: %s", err)
		return
	}
	for _, book := range books {
		logger.Infof("Loaded book: %v", book)
	}

	testBook := model.Book{}
	testBook.Title = "Test title 1"
	testBook.LastUpdatedTime = ptypes.TimestampNow()
	testBook.StartPageUrl = "http://dummy.html"
	bookId, err := db.SaveBook(testBook)
	if err != nil {
		t.Errorf("Error saving book: %s", err)
		return
	}

	testBook, err = db.LoadBook(bookId)
	if err != nil {
		t.Errorf("Error loading book: %s", err)
		return
	}
	testBook.Title = "Test title 2"
	testBook.Status = model.BookStatusType_COMPLETED
	_, err = db.SaveBook(testBook)
	if err != nil {
		t.Errorf("Error saving book: %s", err)
		return
	}

	// create chapter
	testChapter := model.Chapter{BookId: int32(bookId), ChapterNo: 1, Title: "chuong 1"}
	err = db.SaveChapter(testChapter)
	if err != nil {
		t.Errorf("Error saving chapter: %s", err)
		return
	}

	chapters, err := db.LoadChapters(bookId)
	if err != nil {
		t.Errorf("Error loading chapters for book: %d. %s", bookId, err)
		return
	}
	if len(chapters) == 0 {
		t.Errorf("No chapters loaded!")
		return
	}
	for i := 0; i < len(chapters); i++ {
		logger.Infof("Loaded chapter: %v", chapters[i])
	}

	books, err = db.LoadBooks()
	if err != nil {
		t.Errorf("Error reloading books: %s", err)
		return
	}
	for _, book := range books {
		logger.Infof("Reloaded book: %v", book)
	}
}
