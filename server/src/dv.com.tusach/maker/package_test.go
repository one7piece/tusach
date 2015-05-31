package maker

import (
	"database/sql"
	"dv.com.tusach/util"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
	"runtime"
	"testing"
	"time"
)

func initTest(t *testing.T) {
	util.LoadConfig("/home/dvan/vshared/dv/tusach/server/tusach-config.json")
}

func xTestPersistence(t *testing.T) {
	initTest(t)
	InitDB()
	defer func() {
		if err := recover(); err != nil {
			CloseDB()
			log.Printf("Recover from panic: %s\n", err)
			trace := make([]byte, 1024)
			count := runtime.Stack(trace, true)
			log.Printf("Stack of %d bytes: %s\n", count, trace)
		} else {
			log.Println("Closing DB...")
			CloseDB()
		}

	}()

	LoadSystemInfo()
	info := SystemInfo{SystemUpTime: time.Now(), BookLastUpdateTime: time.Now(), ParserEditing: false}
	SaveSystemInfo(info)
	LoadSystemInfo()

	book := Book{Title: "Gia Thien", Author: "Than Dong"}
	bookId, err := SaveBook(book)
	if err != nil {
		log.Println("Error saving book.", err)
	} else {
		book.ID = bookId
		log.Println("Saved book ID: ", book.ID)
	}
	LoadBooks()

	chapter1 := Chapter{BookId: book.ID, ChapterNo: 1, Title: "Chuong 1", Html: []byte("<html></html>")}
	err = SaveChapter(chapter1)
	if err != nil {
		log.Println("Error saving chapter.", err)
	} else {
		LoadChapters(0)
	}

	DeleteBook(book.ID)

	LoadBooks()
	LoadChapters(0)

	LoadUsers()
	user := User{Name: "Dung Van", Role: "admin", Password: "pwd", LastLoginTime: time.Now()}
	SaveUser(user)
	DeleteUser("Dung Van")
	LoadUsers()
}

func xTestPageLoader(t *testing.T) {
	initTest(t)
	url := "http://www.tangthuvien.vn/forum/showthread.php?t=93403&page=19"
	site := GetBookSite(url)
	data, err := site.ExecuteRequest(url)
	if err != nil {
		t.Error(err)
	} else {
		util.SaveFile("/home/dvan/vshared/dv/tusach/chapter2-raw.html", data)
	}
}

func TestEpub(t *testing.T) {
	initTest(t)

	InitDB()

	defer func() {
		if err := recover(); err != nil {
			log.Printf("Recover from panic: %s\n", err)
			CloseDB()
			trace := make([]byte, 1024)
			count := runtime.Stack(trace, true)
			log.Printf("Stack of %d bytes: %s\n", count, trace)
		} else {
			log.Println("Closing DB...")
			CloseDB()
		}
	}()

	book, err := LoadBook(1)
	if err != nil {
		t.Error(err)
		return
	}
	chapters, err := LoadChapters(1)
	if err != nil {
		t.Error(err)
		return
	}

	err = MakeEpub(book, chapters)
	if err != nil {
		t.Error(err)
		return
	}
}

func xTestBookMaker(t *testing.T) {
	initTest(t)

	InitDB()

	defer func() {
		if err := recover(); err != nil {
			log.Printf("Recover from panic: %s\n", err)
			CloseDB()
			trace := make([]byte, 1024)
			count := runtime.Stack(trace, true)
			log.Printf("Stack of %d bytes: %s\n", count, trace)
		} else {
			log.Println("Closing DB...")
			CloseDB()
		}
	}()

	bookChannel := make(chan string)

	//newBook := Book{Title: "Bat Bai Chien Than", StartPageUrl: "http://www.tangthuvien.vn/forum/showthread.php?t=93403", MaxNumPages: 1}
	newBook := Book{Title: "Dai De Tinh Ha", StartPageUrl: "http://tunghoanh.com/dai-de-tinh-ha/chuong-1-yfTaaab.html", MaxNumPages: 1}

	newBook.Status = STATUS_WORKING
	bookId, err := SaveBook(newBook)
	if err != nil {
		t.Error(err)
		return
	}
	newBook.ID = bookId

	go CreateBook(bookChannel, newBook, "tangthuvien")

	// wait for book to complete
	for {
		time.Sleep(5 * time.Second)
		book, err := LoadBook(bookId)
		if err != nil {
			t.Error(err)
		}
		if book.Status != STATUS_WORKING {
			break
		}
	}
	log.Println("closing channel.")
	close(bookChannel)
}

func xTestSqlite3(t *testing.T) {
	os.Remove(util.GetConfiguration().DBFilename)

	log.Println("opening database...")
	db, err := sql.Open("sqlite3", util.GetConfiguration().DBFilename)
	if err != nil {
		t.Errorf("failed to open databse foo.db.", err)
	}
	//defer db.Close()
	defer func() {
		if err := recover(); err != nil {
			db.Close()
			log.Printf("Recover from panic: %s\n", err)
			trace := make([]byte, 1024)
			count := runtime.Stack(trace, true)
			log.Printf("Stack of %d bytes: %s\n", count, trace)
		}
	}()

	log.Println("creating table foo...")
	stmt := `
		create table foo (id integer not null primary key, name text); 
		delete from foo;
	`
	_, err = db.Exec(stmt)
	if err != nil {
		t.Errorf("failed to create table foo.", err)
	}

	log.Println("start transaction...")
	tx, err := db.Begin()
	if err != nil {
		t.Errorf("failed to start transaction.", err)
	}
	pstmt, err := tx.Prepare("insert into foo(id, name) values(?,?)")
	if err != nil {
		t.Errorf("failed to prepare statement.", err)
	}
	defer pstmt.Close()
	log.Println("executing inserts...")
	for i := 0; i < 100; i++ {
		_, err = pstmt.Exec(i, fmt.Sprintf("Hello%03d", i))
		if err != nil {
			t.Errorf("failed to execute statement.", err)
		}
	}
	log.Println("end transaction...")
	tx.Commit()

	rows, err := db.Query("select id, name from foo")
	if err != nil {
		t.Errorf("failed to query select.", err)
	}
	defer rows.Close()
	for rows.Next() {
		var id int
		var name string
		rows.Scan(&id, &name)
		log.Printf("found row: %d, %s\n", id, name)
	}
	rows.Close()

	pstmt, err = db.Prepare("select name from foo where id = ?")
	if err != nil {
		t.Errorf("failed to prepare statement.", err)
	}
	defer pstmt.Close()

}
