package test

import (
	"testing"

	"dv.com.tusach/model"
	"dv.com.tusach/persistence"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

func TestInitBookDir(t *testing.T) {
	logger.Info("TestInitBookDir starting...")
	util.LoadConfig("config-test.json")

	// init book with existing epub
	book := model.Book{Id: 1, Title: "Trach-Thien-Ky-(dich)-tct"}
	err := persistence.InitBookDir(book)
	if err != nil {
		t.Errorf("Failed to InitBookDir: %s", err.Error())
		t.FailNow()
	}

	err = persistence.RemoveBookDir(book)
	if err != nil {
		t.Errorf("Failed to RemoveBookDir: %s", err.Error())
		t.FailNow()
	}

	// init book without existing epub
	book = model.Book{Id: 11, Title: "test"}
	err = persistence.InitBookDir(book)
	if err != nil {
		t.Errorf("Failed to InitBookDir: %s", err.Error())
		t.FailNow()
	}

	err = persistence.RemoveBookDir(book)
	if err != nil {
		t.Errorf("Failed to RemoveBookDir: %s", err.Error())
		t.FailNow()
	}
}

func TestWriteChapter(t *testing.T) {
	logger.Info("TestTestWriteChapter starting...")
	util.LoadConfig("config-test.json")
	// write a new chapter

	// init a new book
	book := model.Book{Id: 22, Title: "test"}
	err := persistence.InitBookDir(book)
	if err != nil {
		t.Errorf("Failed to InitBookDir: %s", err.Error())
		t.FailNow()
	}
	// create a new chapter
	chapters := []model.Chapter{model.Chapter{BookId: book.Id, ChapterNo: 1, Title: "chuong 1"},
		model.Chapter{BookId: book.Id, ChapterNo: 2, Title: "chuong 2"}}
	for i := 0; i < len(chapters); i++ {
		// create dummy chapter html file
		htmlData := `<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Testing</title></head><body class="default">Testing Data...</body></html>`
		err = util.SaveFile(persistence.GetChapterFilename(chapters[i]), []byte(htmlData))
		if err != nil {
			t.Errorf("Failed to save chapter file: %s. %s", persistence.GetChapterFilename(chapters[i]), err.Error())
			t.FailNow()
		}
		err = persistence.WriteChapter(book, chapters[i])
		if err != nil {
			t.Errorf("Failed to write chapter: %s", err.Error())
			t.FailNow()
		}
	}
}
