package main

import (
	"flag"
	"io/ioutil"
	"net/http"
	_ "net/http/pprof"
	"os"
	"strconv"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/one7piece/httprest"
)

type MapData struct {
	data map[string]string `json:data`
}

type EventSink struct {
}

var bookMaker maker.BookMaker
var users []maker.User
var books []maker.Book
var scripts []maker.ParserScript

const sessionExpiredTimeSec = 24 * 60 * 60

type LoginHandler struct {
}

func (h LoginHandler) Validate(username string, password string) bool {
	for _, u := range users {
		if u.Name == username && u.Password == password {
			return true
		}
	}
	return false
}

func (h LoginHandler) GetRoles(username string) []string {
	roles := []string{}
	for _, u := range users {
		if u.Name == username {
			roles = append(roles, u.Role)
			break
		}
	}
	return roles
}

func main() {

	loadData()
	logger.Infof("Starting GO web server, configuration: %+v", util.GetConfiguration())

	eventSink := EventSink{}
	util.GetEventManager().StartListening("BOOK-CHANNEL", &eventSink)

	rest := httprest.New()
	rest.Auth = httprest.JWTAuth{TimeoutSec: sessionExpiredTimeSec, SecretKey: []byte("pi.tusach"), Handler: LoginHandler{}}
	/*
		// setup cors
		rest.CorsPt = cors.New(cors.Options{
			Debug:          true,
			AllowedOrigins: []string{"*"},
			AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders: []string{"Accept", "Content-Type", "Authorization", "X-Custom-Header", "Origin"}})
	*/
	rest.LOGON("/login", Login)
	//rest.LOGOUT("/logout")
	rest.GET(false, "/filterlog/:numLines/:filterRegex", GetFilterLog)
	rest.GET(false, "/systeminfo", GetSystemInfo)
	rest.GET(false, "/sites", GetSites)
	rest.GET(false, "/books/:id", GetBooks)
	rest.GET(true, "/user", GetUser)
	rest.POST("/book/:cmd", UpdateBook)

	// TODO handle CORS

	// api handler
	http.Handle("/api/", http.StripPrefix("/api", rest.Router))
	// download file handler
	http.HandleFunc("/downloadBook/", downloadBook)
	// static file handler
	http.Handle("/", http.FileServer(http.Dir(util.GetConfiguration().ServerPath)))

	logger.Info("GOWebServer started successfully")

	if err := http.ListenAndServe(util.GetConfiguration().ServerBindAddress+":"+
		strconv.Itoa(util.GetConfiguration().ServerBindPort), nil); err != nil {
		logger.Errorf("GOWebServer - ERROR! ", err)
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
		logger.Error("Failed to read epub file (bookId=" + strconv.Itoa(book.ID) + "): " + err.Error())
		http.Error(w, "Failed to read epub file: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Content-Type", "application/epub+zip")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))

	w.Write(data)
}

func Login(ctx *httprest.HttpContext) {
	logger.Info("user " + ctx.User.Name + " has logged on")
}

/*
func writeJsonMap(w rest.ResponseWriter, name string, value string) {
	m := map[string]map[string]string{}
	m["map"] = map[string]string{name: value}
	w.WriteJson(m)
}
*/
func GetSystemInfo(ctx *httprest.HttpContext) {
	info, err := bookMaker.DB.GetSystemInfo(false)
	if err != nil {
		ctx.RespERRString(http.StatusInternalServerError, err.Error())
	}
	ctx.RespOK(info)
}

func GetSites(ctx *httprest.HttpContext) {
	sites := bookMaker.GetBookSites()
	ctx.RespOK(sites)
}

func GetUser(ctx *httprest.HttpContext) {
	ctx.RespOK(ctx.User)
}

func GetBooks(ctx *httprest.HttpContext) {
	idstr := ctx.GetParam("id")
	logger.Debugf("GetBooks - id:%s", idstr)
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

func GetFilterLog(ctx *httprest.HttpContext) {
	numLinesStr := ctx.GetParam("numLines")
	filterRegex := ctx.GetParam("filterRegex")
	logger.Debugf("GetFilterLog - numLines:%s filterRegex:%s", numLinesStr, filterRegex)
	numLines := strconv.Atoi(numLinesStr)
	if numLines <= 0 {
		numLines = 1000
	}

	data, err := ioutil.ReadFile(configuration.LogFile)
	if err != nil {
		logger.Errorf("File %s not found\n", configuration.LogFile)
		ctx.RespERRString(http.StatusInternalServerError, "Could not load log file: "+configuration.LogFile)
		return
	}

	lines := strings.Split(string(data), "\n")
	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		str := matchedServer.FindString(strings.ToLower(line))
		if len(str) > 0 {
			if len(servers) > 0 {
				servers = servers + ","
			}
			servers = servers + line
		}
	}
	ntp.Data["servers"] = servers
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
	op := ctx.GetParam("cmd")
	logger.Infof("UpdateBook - op:%s", op)
	if op != "create" && op != "abort" && op != "resume" && op != "update" && op != "delete" {
		logger.Error("Invalid op value: " + op)
		ctx.RespERRString(http.StatusBadRequest, "Invalid op value: "+op)
		return
	}

	if op == "create" {
		CreateBook(ctx)
		return
	}

	updateBook := maker.Book{}
	err := ctx.GetPayload(&updateBook)
	if err != nil {
		logger.Errorf("Invalid request book payload [%s] %v\n", ctx.R.Body, err)
		ctx.RespERRString(http.StatusInternalServerError, "Invalid request book payload: "+err.Error())
		return
	}

	currentBook, err := bookMaker.DB.LoadBook(updateBook.ID)
	if err != nil {
		logger.Error("Error loading book: " + strconv.Itoa(updateBook.ID) + ": " + err.Error())
		ctx.RespERRString(http.StatusInternalServerError, err.Error())
		return
	}

	logger.Infof("updateBook - op:%s: current book details: %+v", op, updateBook)
	if currentBook.Status == maker.STATUS_WORKING {
		// only allow abort operation
		if op == "abort" {
			util.GetEventManager().Push(util.EventData{Channel: "BOOK-CHANNEL", Type: "abort", Data: currentBook.ID})
		} else {
			ctx.RespERRString(http.StatusInternalServerError, "Cannot "+op+" an in-progress book")
		}
		return
	}

	switch op {
	case "update":
		_, err = bookMaker.DB.SaveBook(updateBook)
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
		_, err := bookMaker.DB.SaveBook(currentBook)
		if err == nil {
			for i := 0; i < len(books); i++ {
				if books[i].ID == currentBook.ID {
					books[i] = currentBook
					break
				}
			}
			// schedule goroutine to create book
			doCreateBook(&currentBook)
		}

	case "delete":
		var newBooks []maker.Book
		bookMaker.DB.DeleteBook(updateBook.ID)
		for i := 0; i < len(books); i++ {
			if books[i].ID == updateBook.ID {
				newBooks = append(books[0:i], books[i+1:]...)
				break
			}
		}
		books = newBooks
	}

	message := "OK"
	if err != nil {
		message = "ERROR: " + err.Error()
		logger.Error(err.Error())
	}

	ctx.RespOK(map[string]string{"status": message})
}

func CreateBook(ctx *httprest.HttpContext) {
	newBook := maker.Book{}
	err := ctx.GetPayload(&newBook)
	if err != nil {
		logger.Errorf("Invalid request book payload: %v\n", err)
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

	newBook.CreatedBy = ctx.User.Name

	// prevent too many concurrent books creation
	numActive := 0
	for _, book := range books {
		if book.Status == maker.STATUS_WORKING {
			numActive++
		}
	}
	if numActive >= util.GetConfiguration().MaxActionBooks {
		logger.Error("Too many concurrent books in progress (" + strconv.Itoa(numActive) + ")")
		ctx.RespERRString(http.StatusBadRequest, "Too many concurrent books in progress")
		return
	}

	newBook.Status = maker.STATUS_WORKING
	newBook.CreatedTime = time.Now()
	bookId, err := bookMaker.DB.SaveBook(newBook)
	if err != nil {
		logger.Error("Failed to save book: " + err.Error())
		ctx.RespERRString(http.StatusInternalServerError, err.Error())
		return
	}
	newBook.ID = bookId

	books = append(books, newBook)

	// schedule goroutine to create book
	doCreateBook(&newBook)

	ctx.RespOK(newBook)
}

func (sink *EventSink) ProcessEvent(event util.EventData) {
	logger.Infof("Received book event: %s (%v)", event.Type, event.Data)
	book, ok := event.Data.(*maker.Book)
	if ok {
		reloadBook(book.ID)
	}
}

func reloadBook(bookId int) {
	updatedBook, err := bookMaker.DB.LoadBook(bookId)
	if err != nil {
		logger.Errorf("Error loading book: %d - %s\n", bookId, err.Error())
	} else {
		for i := 0; i < len(books); i++ {
			if books[i].ID == updatedBook.ID {
				books[i] = updatedBook
				break
			}
		}
	}
}

func doCreateBook(book *maker.Book) {
	data, err := ioutil.ReadFile(util.GetParserPath() + "/parser.js")
	if err != nil {
		logger.Errorf("Failed to load js: %s\n", err)
	}

	engine, err := bookMaker.Compile(data)
	if err != nil {
		logger.Errorf("Error compiling parser.js: %s\n", err.Error())
		return
	}
	go bookMaker.CreateBook(engine, book)
}

func loadData() {
	var logLevel string
	var logFile string
	var configFile string
	flag.StringVar(&configFile, "configFile", "", "Configuration file name")
	flag.StringVar(&logLevel, "logLevel", "info", "logLevel")
	flag.StringVar(&logFile, "logFile", "", "logFile")
	flag.Parse()

	if configFile == "" {
		logger.Debug("GOWebserver - ERROR! missing parameter: configFile")
		os.Exit(1)
	}

	//now := time.Now()

	// load configuration
	util.LoadConfig(configFile)

	logger.Debugf("loaded configuration: %+v", util.GetConfiguration())

	db := persistence.Ql{}
	db.InitDB()
	bookMaker.DB = &db

	// init users
	var err error
	users, err = bookMaker.DB.LoadUsers()
	if err != nil {
		panic("Error loading users! " + err.Error())
	}
	if len(users) != 3 {
		adminUser := maker.User{Name: "admin", Password: "spidey", Role: "administrator"}
		err = bookMaker.DB.SaveUser(adminUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		dadUser := maker.User{Name: "vinhvan", Password: "colong", Role: "user"}
		err = bookMaker.DB.SaveUser(dadUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		guestUser := maker.User{Name: "guest", Password: "password", Role: "user"}
		err = bookMaker.DB.SaveUser(guestUser)
		if err != nil {
			panic("Error saving user! " + err.Error())
		}
		users = []maker.User{adminUser, dadUser, guestUser}
	}
	logger.Infof("users=%d", len(users))

	// load books
	books, err = bookMaker.DB.LoadBooks()
	if err != nil {
		panic("Error loading books! " + err.Error())
	}

	// init parser scripts
}
