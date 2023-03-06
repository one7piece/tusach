package test

import (
	"fmt"
	"testing"

	"dv.com.tusach/model"
	"dv.com.tusach/persistence"

	"dv.com.tusach/util"
)

func Test_drive1(t *testing.T) {
	fmt.Printf("starting...\n")
	util.LoadConfig("config-test.json")
	drv := persistence.GoogleDriveStore{}
	drv.Init()

	db := persistence.FileDB{}
	db.InitDB()

	books := db.GetBooks(false)
	if len(books) == 0 {
		fmt.Printf("No local books found")
		t.FailNow()
	}

	err := drv.StoreBooks([]model.Book{books[0]})
	if err != nil {
		fmt.Printf("Failed to store books: %s\n", err)
		t.FailNow()
	}

	loadedBooks, err := drv.LoadBooks()
	if err != nil {
		fmt.Printf("Failed to load books: %s\n", err)
		t.FailNow()
	}

	if len(loadedBooks) != 1 {
		fmt.Printf("Unexpected number of books %d, expecting 1\n", len(loadedBooks))
		t.FailNow()
	}

	if !compare(loadedBooks[0].Book, &books[0]) {
		fmt.Printf("Loaded book json data is different\n")
		t.FailNow()
	}

}

func compare(b1 *model.Book, b2 *model.Book) bool {
	return b1.Id != b2.Id ||
		b1.Author != b2.Author ||
		b1.BuildTimeSec != b2.BuildTimeSec ||
		b1.CreatedBy != b2.CreatedBy ||
		b1.CreatedTime != b2.CreatedTime ||
		b1.CurrentPageNo != b2.CurrentPageNo ||
		b1.CurrentPageUrl != b2.CurrentPageUrl ||
		b1.Deleted != b2.Deleted ||
		b1.EpubCreated != b2.EpubCreated ||
		b1.ErrorMsg != b2.ErrorMsg ||
		b1.LastUpdatedTime != b2.LastUpdatedTime ||
		b1.MaxNumPages != b2.MaxNumPages ||
		b1.StartPageUrl != b2.StartPageUrl ||
		b1.Status != b2.Status ||
		b1.Title == b2.Title
}
