package main

import (
	"errors"
	"flag"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"dv.com.tusach/maker"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/golang/glog"
	"github.com/one7piece/httprest"
)

type MapData struct {
	data map[string]string `json:data`
}

var bookMaker maker.BookMaker
var users []maker.User
var books []maker.Book
var scripts []maker.ParserScript
var eventManagers map[int]util.EventManager

const sessionExpiredTimeSec = 60 * 60

func main() {
	loadData()

	glog.Info("Starting GO web server at " + util.GetConfiguration().ServerBindAddress +
		":" + strconv.Itoa(util.GetConfiguration().ServerBindPort) +
		", server path: " + util.GetConfiguration().ServerPath +
		", server path2: " + util.GetConfiguration().ServerPath2)

	db := persistence.Sqlite3{}
	db.InitDB()
	bookMaker.DB = db

	// create channels map
	eventManagers = make(map[int]util.EventManager)

	rest := httprest.New()
	rest.Auth = httprest.JWTAuth{SecretKey: []byte("pi.tusach")}
	rest.LOGON("/login")
	//rest.LOGOUT("/logout")
	rest.GET("/systeminfo", GetSystemInfo)
	rest.GET("/sites", GetSites)
	rest.GET("/books/:id", GetBooks)
	rest.GET("/user", GetUser)
	rest.POST("/book/:cmd", UpdateBook)

	// TODO handle CORS

	// api handler
	http.Handle("/api/", http.StripPrefix("/api", rest.Router))
	// download file handler
	http.HandleFunc("/downloadBook/", downloadBook)
	// static file handler
	http.Handle("/", http.FileServer(http.Dir(util.GetConfiguration().ServerPath)))

	glog.Info("GOWebServer started successfully")

	if err := http.ListenAndServe(util.GetConfiguration().ServerBindAddress+":"+
		strconv.Itoa(util.GetConfiguration().ServerBindPort), nil); err != nil {
		log.Fatal("GOWebServer - ERROR! ", err)
		os.Exit(1)
	}
}

func downloadBook(w http.ResponseWriter, r *http.Request) {
	bookId, err := strconv.Atoi(r.URL.Query().Get("bookId"))
	if err != nil {
		http.Error(w, "Invalid book ID", http.StatusBadRequest)
		return
	}

	book := maker.Book{}
	// find the book
	for _, b := range books {
		if b.ID == bookId {
			book = b
		}
	}
	if book.ID == 0 {
		http.Error(w, "Invalid book ID", http.StatusBadRequest)
		return
	}

	epubFile := util.GetBookEpubFilename(book.ID, book.Title)
	data, err := ioutil.ReadFile(epubFile)
	if err != nil {
		glog.Error("Failed to read epub file (bookId=" + strconv.Itoa(book.ID) + "): " + err.Error())
		http.Error(w, "Failed to read epub file: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Content-Type", "application/epub+zip")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))

	w.Write(data)
}

func writeJsonMap(w rest.ResponseWriter, name string, value string) {
	m := map[string]map[string]string{}
	m["map"] = map[string]string{name: value}
	w.WriteJson(m)
}

func GetSystemInfo(ctx *httprest.HttpContext) {
	info := bookMaker.DB.GetSystemInfo(false)
	ctx.RespOK(info)
}

func GetSites(ctx *httprest.HttpContext) {
	sites := maker.GetBookSites()
	ctx.RespOK(sites)
}

func GetUser(ctx *httprest.HttpContext) {
	ctx.RespOK(ctx.User)
}

func GetBooks(ctx *httprest.HttpContext) {
	idstr := ctx.Params.ByName("id")
	log.Printf("GetBooks: %s", idstr)
	result := []maker.Book{}
	if idstr == "0" {
		result = books
	} else {
		arr := strings.Split(idstr, ",")
		for _, s := range arr {
			id, err := strconv.Atoi(s)
			if err != nil {
				ctx.RespERRString(http.StatusBadRequest, "Invalid book ID, value must be an integer.")
				return
			}
			// find the book
			for _, book := range books {
				if book.ID == id {
					result = append(result, book)
				}
			}
		}
	}

	ctx.RespOK(result)
}

func UpdateBook(ctx *httprest.HttpContext) {
	op := ctx.Params.ByName("cmd")
	glog.Info("UpdateBook: op:%s", op)
	if op != "create" && op != "abort" && op != "resume" && op != "update" && op != "delete" {
		glog.Error("Invalid op value: " + op)
		ctx.RespERRString(http.StatusBadRequest, "Invalid op value: "+op)
		return
	}

	if op == "create" {
		CreateBook(ctx)
		return
	}

	updateBook := maker.Book{}
	err := r.DecodeJsonPayload(&updateBook)
	if err != nil {
		glog.Error("Invalid request book payload: " + err.Error())
		ctx.RespERRString(http.StatusInternalServerError, "Invalid request book payload: "+err.Error())
		return
	}

	currentBook, err := bookMaker.LoadBook(updateBook.ID)
	if err != nil {
		glog.Error("Error loading book: " + strconv.Itoa(updateBook.ID) + ": " + err.Error())
		ctx.RespERRString(http.StatusInternalServerError, err.Error())
		return
	}

	em, present := eventManagers[updateBook.ID]
	if present {
		// can only abort
		if op == "abort" {
			em.Push(util.EventData{Name: "book.abort", Data: updateBook.ID})
		} else {
			err = errors.New("Book is currently in progress.")
		}
	} else {
		switch op {
		case "abort":
			currentBook.Status = maker.STATUS_ABORTED
			bookMaker.SaveBook(currentBook)
			for i := 0; i < len(books); i++ {
				if books[i].ID == currentBook.ID {
					books[i] = currentBook
					break
				}
			}

		case "update":
			_, err = bookMaker.SaveBook(updateBook)
			if err == nil {
				for i := 0; i < len(books); i++ {
					if books[i].ID == updateBook.ID {
						books[i] = updateBook
						break
					}
				}
			}

		case "resume":
			currentBook.Status = maker.STATUS_WORKING
			_, err := bookMaker.SaveBook(currentBook)
			if err == nil {
				for i := 0; i < len(books); i++ {
					if books[i].ID == currentBook.ID {
						books[i] = currentBook
						break
					}
				}

				// find parser
				url := currentBook.CurrentPageUrl
				if currentBook.CurrentPageNo <= 0 {
					url = currentBook.StartPageUrl
				}
				site := bookMaker.GetBookSite(url)
				if site.Parser == "" {
					err = errors.New("No parser found for url: " + currentBook.CurrentPageUrl)
				} else {
					// schedule goroutine to create book
					scheduleCreateBook(currentBook, site)
				}
			}

		case "delete":
			var newBooks []maker.Book
			bookMaker.DeleteBook(updateBook.ID)
			for i := 0; i < len(books); i++ {
				if books[i].ID == updateBook.ID {
					newBooks = append(books[0:i], books[i+1:]...)
					break
				}
			}
			books = newBooks
		}
	}

	message := "OK"
	if err != nil {
		message = "ERROR: " + err.Error()
		glog.Error(err.Error())
	}

	w.WriteJson(map[string]string{"status": message})
}

func CreateBook(ctx *httprest.HttpContext) {
	newBook := maker.Book{}
	err := ctx.GetPayload(&newBook)
	if err != nil {
		glog.Info("Invalid request book payload. %v\n", err)
		ctx.RespERRString(http.StatusInternalServerError, "Invalid request book payload: "+err.Error())
		return
	}

	// validate
	if newBook.Title == "" {
		ctx.RespERRString(http.StatusBadRequest, "Missing book title")
		return
	}
	if newBook.StartPageUrl == "" {
		ctx.RespERRString(http.StatusBadRequest, "Missing start page URL")
		return
	}

	newBook.CreatedBy = user.Name

	// prevent too many concurrent books creation
	numActive := 0
	for _, book := range books {
		if book.Status == maker.STATUS_WORKING {
			numActive++
		}
	}
	if numActive >= util.GetConfiguration().MaxActionBooks {
		glog.Error("Too many concurrent books in progress (" + strconv.Itoa(numActive) + ")")
		ctx.RespERRString(http.StatusBadRequest, "Too many concurrent books in progress")
		return
	}

	site := bookMaker.GetBookSite(newBook.StartPageUrl)
	if site.Parser == "" {
		glog.Error("No parser found for url: " + newBook.StartPageUrl)
		ctx.RespERRString(http.StatusBadRequest, "No parser found for url: "+newBook.StartPageUrl)
		return
	}

	newBook.Status = maker.STATUS_WORKING
	newBook.CreatedTime = time.Now()
	bookId, err := bookMaker.SaveBook(newBook)
	if err != nil {
		glog.Error("Failed to save book: " + err.Error())
		ctx.RespERRString(http.StatusInternalServerError, err.Error())
		return
	}
	newBook.ID = bookId

	books = append(books, newBook)

	// schedule goroutine to create book
	scheduleCreateBook(newBook, site)

	ctx.RespOK(newBook)
}

type EventSink struct {
	manager *util.EventManager
}

func (sink EventSink) HandleEvent(event util.EventData) {
	if event.Name == "book.done" {
		str := event.Data.(string)
		bookId, err := strconv.Atoi(str)
		if err != nil {
			glog.Fatal("Invalid book id, expecting a number")
			glog.Flush()
			panic("Invalid book id, expecting a number")
			return
		}
		reloadBook(bookId)
		em, ok := eventManagers[bookId]
		if ok {
			glog.Info("Book %d completed, closing channel\n", bookId)
			close(em.Channel)
			delete(eventManagers, bookId)
		}
	} else if event.Name == "book.update" {
		str := event.Data.(string)
		bookId, err := strconv.Atoi(str)
		if err != nil {
			glog.Fatal("Invalid book id, expecting a number")
			glog.Flush()
			panic("Invalid book id, expecting a number")
			return
		}
		glog.Info("Received book updated event for %d, reloading book\n", bookId)
		reloadBook(bookId)
	}
}

func reloadBook(bookId int) {
	updatedBook, err := maker.LoadBook(bookId)
	if err != nil {
		glog.Error("Error loading book: %d - %s\n", bookId, err.Error())
	} else {
		for i := 0; i < len(books); i++ {
			if books[i].ID == updatedBook.ID {
				books[i] = updatedBook
				break
			}
		}
	}
}

func scheduleCreateBook(book maker.Book, site maker.BookSite) {
	// create channel for communication
	c := make(util.EventChannel)
	em := util.CreateEventManager(c, 1)
	em.StartListening(EventSink{manager: em})
	eventManagers[book.ID] = *em
	go maker.CreateBook(c, book, site)
}

func loadData() {
	var configFile string
	flag.StringVar(&configFile, "configFile", "", "Configuration file name")
	flag.Parse()

	if configFile == "" {
		log.Fatal("GOWebserver - ERROR! missing parameter: configFile")
		os.Exit(1)
	}
	//now := time.Now()

	// load configuration
	util.LoadConfig(configFile)
	maker.InitDB()

	// init users
	var err error
	users, err = maker.LoadUsers()
	if err != nil {
		panic("Error loading users! " + err.Error())
	}
	if len(users) != 3 {
		adminUser := maker.User{Name: "admin", Password: "spidey", Role: "administrator"}
		err = maker.SaveUser(adminUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		dadUser := maker.User{Name: "vinhvan", Password: "colong", Role: "user"}
		err = maker.SaveUser(dadUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		guestUser := maker.User{Name: "guest", Password: "password", Role: "user"}
		err = maker.SaveUser(guestUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		users = []maker.User{adminUser, dadUser, guestUser}
	}
	glog.Info("found %d users\n", len(users))

	// load books
	books, err = maker.LoadBooks()
	if err != nil {
		panic("Error loading books! " + err.Error())
	}

	// init parser scripts
}
