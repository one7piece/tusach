package rest

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"strings"
	"testing"
	"time"

	"dv.com.tusach/model"
	"github.com/golang/protobuf/jsonpb"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
)

func TestMain(m *testing.M) {
	// set up rest server
	util.LoadConfig("../../../../test/config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	bookMaker := maker.NewBookMaker(&db)
	restApp := RestServer{}
	go func() {
		err := restApp.Start(bookMaker)
		if err != nil {
			logger.Errorf("Failed to start REST server: %s", err)
			os.Exit(1)
		}
	}()
	// delay waiting for server to start
	fmt.Println("waiting for webserver to start")
	time.Sleep(5 * time.Second)
	os.Exit(m.Run())
}

func Test_GetBook(t *testing.T) {
	fmt.Println("Test_GetBook...")
	book := LoadBook(t, 1)
	fmt.Printf("loaded book: %+v\n", book)
}

func LoadBook(t *testing.T, bookId int) model.Book {
	req, err := http.NewRequest("GET", "http://localhost:8888/api/tusach/book/get/"+strconv.Itoa(bookId), nil)
	if err != nil {
		t.Fatalf(err.Error())
	}
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatal(err)
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}
	fmt.Printf("LoadBook - response received: [%s]\n", data)
	book := model.Book{}
	err = jsonpb.UnmarshalString(string(data), &book)
	if book.Id != int32(bookId) {
		fmt.Printf("Wrong book ID: %d, expecting %d\n", book.Id, bookId)
		t.FailNow()
	}
	return book
}
func Test_GetBooks(t *testing.T) {
	fmt.Println("Test_GetBooks...")
	bookId := 1
	req, err := http.NewRequest("GET", "http://localhost:8888/api/tusach/book/get/"+strconv.Itoa(bookId), nil)
	if err != nil {
		t.Fatalf(err.Error())
	}
	// change the author and the current page url

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatal(err)
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}
	fmt.Printf("Response received: [%s]\n", data)
	bookList := model.BookList{}
	err = jsonpb.UnmarshalString(string(data), &bookList)
	if !bookList.IsFullList {
		t.Errorf("IsFullList is %t, expecting true!", bookList.IsFullList)
	}
	fmt.Printf("Unmarshaled bookList: %+v\n", bookList)
}

func Test_ResumeBook(t *testing.T) {
	fmt.Println("Test_ResumeBook...")
	req, err := http.NewRequest("POST", "http://localhost:8888/api/tusach/book/command/resume", strings.NewReader("{\"ID\": 1}"))
	if err != nil {
		t.Fatalf(err.Error())
	}
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatal(err)
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}
	fmt.Printf("Response received: [%s]\n", data)
	if string(data) != "OK" {
		t.FailNow()
	}

	book := LoadBook(t, 1)
	fmt.Printf("loaded book: %+v\n", book)
	if book.Id != 1 || book.Status != model.BookStatusType_IN_PROGRESS {
		t.FailNow()
	}
}

func Test_UpdateBook(t *testing.T) {
	fmt.Println("Test_UpdateBook...")
	book := LoadBook(t, 1)
	book.Author = "Dung Van"
	book.CurrentPageUrl = "http://current_page_url.com"

	marshaler := jsonpb.Marshaler{}
	jsonstr, err := marshaler.MarshalToString(&book)
	if err != nil {
		t.Fatalf(err.Error())
	}
	fmt.Printf("updated book json: %s\n", jsonstr)
	req, err := http.NewRequest("POST", "http://localhost:8888/api/tusach/book/command/update", strings.NewReader(jsonstr))
	if err != nil {
		t.Fatalf(err.Error())
	}
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatal(err)
	}
	defer resp.Body.Close()
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		t.Fatal(err)
	}
	fmt.Printf("Response received: [%s]\n", data)
	if string(data) != "OK" {
		t.FailNow()
	}
}
