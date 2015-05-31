package main

import (
	"dv.com.tusach/maker"
	"dv.com.tusach/util"
	"errors"
	"flag"
	"github.com/ant0ine/go-json-rest/rest"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

type SessionUser struct {
	user         maker.User
	expiredInSec int
}

var systemInfo maker.SystemInfo
var users []maker.User
var books []maker.Book
var scripts []maker.ParserScript
var eventManagers map[int]util.EventManager
var sessions map[string]maker.User
var sessionTimeLeftSecs map[string]int

const sessionExpiredTimeSec = 1 * 60

func main() {
	loadData()

	log.Println("Starting GO web server at " + util.GetConfiguration().ServerBindAddress +
		":" + strconv.Itoa(util.GetConfiguration().ServerBindPort) +
		", server path: " + util.GetConfiguration().ServerPath)

	// create channels map
	eventManagers = make(map[int]util.EventManager)
	sessions = make(map[string]maker.User)
	sessionTimeLeftSecs = make(map[string]int)

	api := rest.NewApi()
	api.Use(rest.DefaultDevStack...)
	router, err := rest.MakeRouter(
		&rest.Route{"GET", "/systeminfo", GetSystemInfo},
		&rest.Route{"GET", "/books/:id", GetBooks},
		&rest.Route{"POST", "/book/:cmd", UpdateBook},
		&rest.Route{"POST", "/login", Login},
		&rest.Route{"POST", "/logout/:session", Logout},
		&rest.Route{"GET", "/user/:session", GetUser},
		&rest.Route{"GET", "/validate/:session", ValidateSession},
	)
	if err != nil {
		log.Fatal("GOWebServer - ERROR! ", err)
		os.Exit(1)
	}

	api.SetApp(router)

	// api handler
	http.Handle("/api/", http.StripPrefix("/api", api.MakeHandler()))
	// download file handler
	http.HandleFunc("/downloadBook/", downloadBook)
	// static file handler
	http.Handle("/", http.FileServer(http.Dir(util.GetConfiguration().ServerPath)))

	ticker := time.NewTicker(time.Second * 60)
	go func() {
		for range ticker.C {
			for key, value := range sessionTimeLeftSecs {
				sessionTimeLeftSecs[key] = value - 60
				if sessionTimeLeftSecs[key] <= 0 {
					log.Printf("Session %s[%+v] has expired!\n", key, sessions[key])
					delete(sessions, key)
					delete(sessionTimeLeftSecs, key)
				}
			}
		}
	}()

	log.Println("GOWebServer started successfully")

	if err := http.ListenAndServe(util.GetConfiguration().ServerBindAddress+":"+
		strconv.Itoa(util.GetConfiguration().ServerBindPort), nil); err != nil {
		log.Fatal("GOWebServer - ERROR! ", err)
		ticker.Stop()
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
		http.Error(w, "Failed to read epub file: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Content-Type", "application/epub+zip")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))
	//index := strings.LastIndex(epubFile, "/")
	//w.Header().Set("Content-Disposition", "attachment; filename=\""+epubFile[index+1:]+"\"")

	w.Write(data)
}

func GetSystemInfo(w rest.ResponseWriter, r *rest.Request) {
	w.WriteJson(systemInfo)
}

func Login(w rest.ResponseWriter, r *rest.Request) {
	log.Println("login ")
	dummy := maker.User{}
	err := r.DecodeJsonPayload(&dummy)
	if err != nil {
		rest.Error(w, "Missing or invalid user object", 400)
		return
	}
	log.Println("login: " + dummy.Name)

	user := getUser(dummy.Name)
	if user.Name == "" || user.Password != dummy.Password {
		rest.Error(w, "Wrong user name or password", 400)
		return
	}
	log.Println("login user: " + user.Name)
	sessionId := strconv.FormatInt(time.Now().UnixNano(), 10)
	user.SessionId = sessionId
	user.Password = ""
	sessions[sessionId] = user
	sessionTimeLeftSecs[sessionId] = sessionExpiredTimeSec
	w.WriteJson(user)
}

func Logout(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("id")
	valid := "0"

	if _, ok := sessions[sessionId]; ok {
		valid = "1"
	}
	delete(sessions, sessionId)
	delete(sessionTimeLeftSecs, sessionId)
	w.WriteJson(map[string]string{"status": valid})
}

func GetUser(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("session")
	user, ok := sessions[sessionId]
	if !ok {
		rest.Error(w, "Not logged on", 400)
		return
	}
	w.WriteJson(user)
}

func ValidateSession(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("session")
	secs, ok := sessionTimeLeftSecs[sessionId]
	if !ok {
		w.WriteJson(map[string]string{"sessionTimeRemainingSec": "0"})
	} else {
		w.WriteJson(map[string]string{"sessionTimeRemainingSec": strconv.Itoa(secs)})
	}
}

func getUser(name string) maker.User {
	for _, u := range users {
		if u.Name == name {
			return u
		}
	}
	return maker.User{}
}

func GetBooks(w rest.ResponseWriter, r *rest.Request) {
	idstr := r.PathParam("id")
	log.Printf("GetBooks: %s", idstr)
	result := []maker.Book{}
	if idstr == "0" {
		result = books
	} else {
		arr := strings.Split(idstr, ",")
		for _, s := range arr {
			id, err := strconv.Atoi(s)
			if err != nil {
				rest.Error(w, "Invalid book ID, value must be an integer.", 400)
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

	w.WriteJson(result)
}

func UpdateBook(w rest.ResponseWriter, r *rest.Request) {
	op := r.PathParam("cmd")
	log.Printf("UpdateBook: %s", op)
	if op != "create" && op != "abort" && op != "resume" && op != "update" && op != "delete" {
		rest.Error(w, "Invalid op value: "+op, 400)
		return
	}

	if op == "create" {
		CreateBook(w, r)
		return
	}

	updateBook := maker.Book{}
	err := r.DecodeJsonPayload(&updateBook)
	if err != nil {
		rest.Error(w, "Invalid request book payload: "+err.Error(), http.StatusInternalServerError)
		return
	}

	currentBook, err := maker.LoadBook(updateBook.ID)
	if err != nil {
		rest.Error(w, err.Error(), http.StatusInternalServerError)
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
		case "update":
			_, err = maker.SaveBook(updateBook)

		case "resume":
			currentBook.Status = maker.STATUS_WORKING
			_, err := maker.SaveBook(currentBook)
			if err == nil {
				// find parser
				url := currentBook.CurrentPageUrl
				if currentBook.CurrentPageNo <= 0 {
					url = currentBook.StartPageUrl
				}
				site := maker.GetBookSite(url)
				if site.Parser == "" {
					err = errors.New("No parser found for url: " + currentBook.CurrentPageUrl)
				} else {
					// schedule goroutine to create book
					scheduleCreateBook(currentBook, site)
				}
			}

		case "delete":
			maker.DeleteBook(updateBook.ID)
		}
	}

	message := "OK"
	if err != nil {
		message = "ERROR: " + err.Error()
	}

	w.WriteJson(map[string]string{"status": message})
}

func CreateBook(w rest.ResponseWriter, r *rest.Request) {
	newBook := maker.Book{}
	err := r.DecodeJsonPayload(&newBook)
	if err != nil {
		log.Printf("Invalid request book payload. %v\n", err)
		rest.Error(w, "Invalid request book payload: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// validate
	if newBook.Title == "" {
		rest.Error(w, "Missing book title", 400)
		return
	}
	if newBook.StartPageUrl == "" {
		rest.Error(w, "Missing start page URL", 400)
		return
	}

	// prevent too many concurrent books creation
	numActive := 0
	for _, book := range books {
		if book.Status == maker.STATUS_WORKING {
			numActive++
		}
	}
	if numActive >= util.GetConfiguration().MaxActionBooks {
		rest.Error(w, "Too many concurrent books in progress", 400)
		return
	}

	site := maker.GetBookSite(newBook.StartPageUrl)
	if site.Parser == "" {
		rest.Error(w, "No parser found for url: "+newBook.StartPageUrl, 400)
		return
	}

	newBook.Status = maker.STATUS_WORKING
	bookId, err := maker.SaveBook(newBook)
	if err != nil {
		rest.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	newBook.ID = bookId

	// schedule goroutine to create book
	scheduleCreateBook(newBook, site)

	w.WriteJson(newBook)
}

type EventSink struct {
	manager *util.EventManager
}

func (sink EventSink) HandleEvent(event util.EventData) {
	if event.Name == "book.done" {
		str := event.Data.(string)
		bookId, err := strconv.Atoi(str)
		if err != nil {
			panic("Invalid book id, expecting a number")
			return
		}
		em, ok := eventManagers[bookId]
		if ok {
			log.Printf("Book %d completed, closing channel\n", bookId)
			close(em.Channel)
			delete(eventManagers, bookId)
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
	now := time.Now()

	// load configuration
	util.LoadConfig(configFile)
	maker.InitDB()

	// init system info
	systemInfo = maker.SystemInfo{SystemUpTime: now, BookLastUpdateTime: now, ParserEditing: false}
	err := maker.SaveSystemInfo(systemInfo)
	if err != nil {
		panic("Error saving system info! " + err.Error())
	}

	// init users
	users, err = maker.LoadUsers()
	if err != nil {
		panic("Error loading users! " + err.Error())
	}
	if len(users) != 2 {
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
		users = []maker.User{adminUser, dadUser}
	}

	// load books
	books, err = maker.LoadBooks()
	if err != nil {
		panic("Error loading books! " + err.Error())
	}

	// init parser scripts
}
