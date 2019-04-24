package test

import (
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"testing"

	"dv.com.tusach/model"

	"dv.com.tusach/logger"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
)

func TestInitDB(t *testing.T) {
	logger.Info("TestInitDB starting...")
	util.LoadConfig("config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	users := db.GetUsers()
	AssertTrue(t, "Expecting 3 users, found "+strconv.Itoa(len(users)), len(users) == 3)
}

func AssertTrue(t *testing.T, message string, condition bool) {
	if !condition {
		t.Error(message)
		t.FailNow()
	}
}

func CheckErr(t *testing.T, err error) {
	if err != nil {
		t.Error(err)
		t.FailNow()
	}
}

func TestUsers(t *testing.T) {
	logger.Info("TestInitDB starting...")
	util.LoadConfig("config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	newUser := model.User{Name: "newuser", Roles: "newrole"}
	err := db.SaveUser(newUser)
	CheckErr(t, err)
	users := db.GetUsers()
	AssertTrue(t, "Expecting 4 users, found "+strconv.Itoa(len(users)), len(users) == 4)
	found := false
	for _, user := range users {
		if user.GetName() == newUser.GetName() {
			found = true
			break
		}
	}
	AssertTrue(t, "created user not found ", found)
	err = db.DeleteUser(newUser.GetName())
	CheckErr(t, err)
	users = db.GetUsers()
	AssertTrue(t, "Expecting 3 users, found "+strconv.Itoa(len(users)), len(users) == 3)
}

func TestBooks(t *testing.T) {
	logger.Info("TestBooks starting...")
	util.LoadConfig("config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	maxId, err := db.GetMaxBookId()
	CheckErr(t, err)
	log.Printf("current max book id: %d\n", maxId)
	newBook := model.Book{Title: "test book 1", StartPageUrl: "http://start page"}
	id, err := db.SaveBook(&newBook)
	CheckErr(t, err)
	AssertTrue(t, "Wrong book id: "+strconv.Itoa(id), id == int(newBook.ID))
	loadBook := db.GetBook(newBook.ID)
	AssertTrue(t, "Expecting book id: "+strconv.Itoa(int(newBook.ID))+", found: "+strconv.Itoa(int(loadBook.ID)), loadBook.ID == newBook.ID)
	fmt.Printf("Created book: %d. %s\n", newBook.ID, newBook.Title)

	// test json marshalling of Book object
	str, err := json.Marshal(newBook)
	CheckErr(t, err)
	fmt.Printf("marshall JSON string: %s\n", string(str))

	persistence.InitBookDir(newBook)

	// create a new chapter
	chapters := []model.Chapter{model.Chapter{BookId: newBook.ID, ChapterNo: 1, Title: "chuong 1"},
		model.Chapter{BookId: newBook.ID, ChapterNo: 2, Title: "chuong 2"}}
	for i := 0; i < len(chapters); i++ {
		// create dummy chapter html file
		htmlData := `<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Testing</title></head><body class="default">Testing Data...</body></html>`

		err = util.SaveFile(persistence.GetChapterFilename(chapters[i]), []byte(htmlData))
		if err != nil {
			t.Errorf("Failed to save chapter file: %s. %s", persistence.GetChapterFilename(chapters[i]), err.Error())
			t.FailNow()
		}
		err = db.SaveChapter(chapters[i])
		if err != nil {
			t.Errorf("Failed to save chapter: %s", err.Error())
			t.FailNow()
		}
	}

}
