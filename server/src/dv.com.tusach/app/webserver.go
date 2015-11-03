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

type MapData struct {
	data map[string]string `json:data`
}

var users []maker.User
var books []maker.Book
var scripts []maker.ParserScript
var eventManagers map[int]util.EventManager
const sessionExpiredTimeSec = 60 * 60
var sessionManager *SessionManager

func main() {
	//f, err := os.OpenFile("webserver.log", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	//if err != nil {
	//log.Fatal("error opening file: %v", err)
	//}
	//defer f.Close()
	//log.SetOutput(f)

	loadData()

	log.Println("Starting GO web server at " + util.GetConfiguration().ServerBindAddress +
		":" + strconv.Itoa(util.GetConfiguration().ServerBindPort) +
		", server path: " + util.GetConfiguration().ServerPath +
		", server path2: " + util.GetConfiguration().ServerPath2)
		
	// create channels map
	eventManagers = make(map[int]util.EventManager)
	sessionManager = NewSessionManager()
	//sessions = make(map[string]maker.User)
	//sessionTimeLeftSecs = make(map[string]int)

	api := rest.NewApi()
	api.Use(rest.DefaultDevStack...)
	api.Use(&rest.CorsMiddleware{
		RejectNonCorsRequests: false,
		OriginValidator: func(origin string, request *rest.Request) bool {
			log.Printf("OriginValidator: %s\n", origin)
			//return origin == "http://my.other.host"
			return true
		},
		AllowedMethods: []string{"GET", "POST", "PUT"},
		AllowedHeaders: []string{
			"Accept", "Content-Type", "X-Custom-Header", "Origin"},
		AccessControlAllowCredentials: true,
		AccessControlMaxAge:           3600,
	})
	
	router, err := rest.MakeRouter(
		&rest.Route{"GET", "/systeminfo", GetSystemInfo},
		&rest.Route{"GET", "/sites", GetSites},
		&rest.Route{"GET", "/books/:id", GetBooks},
		&rest.Route{"POST", "/book/:session/:cmd", UpdateBook},
		&rest.Route{"POST", "/login", Login},
		&rest.Route{"POST", "/logout/:session", Logout},
		&rest.Route{"GET", "/user/:session", GetUser},
		&rest.Route{"GET", "/validate/:session", ValidateSession},
		&rest.Route{"POST", "/recharge/:session", RechargeSession},
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
	if (util.GetConfiguration().ServerPath2 != "") {
		http.Handle("/v2/", http.StripPrefix("/v2", http.FileServer(http.Dir(util.GetConfiguration().ServerPath2))))
	}

	ticker := time.NewTicker(time.Second * 60)
	go func() {
		for range ticker.C {
			sessionManager.UpdateSessionTime(60)
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
	w.WriteJson(maker.GetSystemInfo())
}

func writeJsonMap(w rest.ResponseWriter, name string, value string) {
	m := map[string]map[string]string{}
	m["map"] = map[string]string{name: value}
	w.WriteJson(m)
}

func GetSites(w rest.ResponseWriter, r *rest.Request) {
	sites := maker.GetBookSites()
	//siteStr := strings.Join(sites, ",")
	//writeJsonMap(w, "sites", siteStr)
	w.WriteJson(sites)
}

func Login(w rest.ResponseWriter, r *rest.Request) {
	log.Println("login ")
	dummy := maker.User{}
	err := r.DecodeJsonPayload(&dummy)
	if err != nil {
		log.Println("Missing or invalid user object")
		rest.Error(w, "Missing or invalid user object", 400)
		return
	}

	logonUser, err := sessionManager.Login(dummy.Name, dummy.Password)
	if err != nil {
		rest.Error(w, err.Error(), 400)
		return
	}

	log.Println("login user: " + logonUser.Name)
	w.WriteJson(logonUser)
}

func Logout(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("id")
	valid := "0"

	logonUser := sessionManager.Logout(sessionId)
	if logonUser != nil {
		valid = "1"
	}
	w.WriteJson(map[string]string{"status": valid})
}

func GetUser(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("session")
	user := sessionManager.GetLogonUser(sessionId)
	if (user.Name == "") {
		rest.Error(w, "Not logged on", 400)
		return
	}
	user.Password = ""	
	w.WriteJson(user)
}

func ValidateSession(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("session")
	if !sessionManager.IsLogon(sessionId) {
		w.WriteJson(map[string]string{"sessionTimeRemainingSec": "0"})
	} else {
		user := sessionManager.GetLogonUser(sessionId)		
		w.WriteJson(map[string]string{"sessionTimeRemainingSec": strconv.Itoa(user.TimeLeftInSec)})
	}
}

func RechargeSession(w rest.ResponseWriter, r *rest.Request) {
	sessionId := r.PathParam("session")
	secs := 0
	if sessionManager.IsLogon(sessionId) {
		sessionManager.RenewSession(sessionId)
		secs = sessionExpiredTimeSec
	}
	w.WriteJson(map[string]string{"sessionTimeRemainingSec": strconv.Itoa(secs)})
}

func getUser(name string) maker.User {
	for _, u := range users {
		log.Printf("parser user: %s\n", u.Name)
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
	sessionId := r.PathParam("session")
	op := r.PathParam("cmd")
	log.Printf("UpdateBook: session:%s, op:%s", sessionId, op)
	if op != "create" && op != "abort" && op != "resume" && op != "update" && op != "delete" {
		rest.Error(w, "Invalid op value: "+op, 400)
		return
	}
	// validate session
	user := sessionManager.GetLogonUser(sessionId)
	if user.Name == "" {
		rest.Error(w, "No permission", 400)
		return
	}

	if op == "create" {
		CreateBook(user, w, r)
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
		case "abort":
			currentBook.Status = maker.STATUS_ABORTED
			maker.SaveBook(currentBook)
			for i := 0; i < len(books); i++ {
				if books[i].ID == currentBook.ID {
					books[i] = currentBook
					break
				}
			}

		case "update":
			_, err = maker.SaveBook(updateBook)
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
			_, err := maker.SaveBook(currentBook)
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
				site := maker.GetBookSite(url)
				if site.Parser == "" {
					err = errors.New("No parser found for url: " + currentBook.CurrentPageUrl)
				} else {
					// schedule goroutine to create book
					scheduleCreateBook(currentBook, site)
				}
			}

		case "delete":
			var newBooks []maker.Book
			maker.DeleteBook(updateBook.ID)
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
	}

	w.WriteJson(map[string]string{"status": message})
}

func CreateBook(user LogonUser, w rest.ResponseWriter, r *rest.Request) {
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

	newBook.CreatedBy = user.Name
	
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
	newBook.CreatedTime = time.Now()
	bookId, err := maker.SaveBook(newBook)
	if err != nil {
		rest.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	newBook.ID = bookId

	books = append(books, newBook)

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
		reloadBook(bookId)
		em, ok := eventManagers[bookId]
		if ok {
			log.Printf("Book %d completed, closing channel\n", bookId)
			close(em.Channel)
			delete(eventManagers, bookId)
		}
	} else if event.Name == "book.update" {
		str := event.Data.(string)
		bookId, err := strconv.Atoi(str)
		if err != nil {
			panic("Invalid book id, expecting a number")
			return
		}
		log.Printf("Received book updated event for %d, reloading book\n", bookId)
		reloadBook(bookId)
	}
}

func reloadBook(bookId int) {
	updatedBook, err := maker.LoadBook(bookId)
	if err != nil {
		log.Printf("Error loading book: %d - %s\n", bookId, err.Error())
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
	log.Printf("found %d users\n", len(users))

	// load books
	books, err = maker.LoadBooks()
	if err != nil {
		panic("Error loading books! " + err.Error())
	}

	// init parser scripts
}

type LogonUser struct {
	maker.User
	TimeLeftInSec int
}

func NewLogonUser(name string) LogonUser {
	user := LogonUser{}
	user.Name = name
	user.SessionId = strconv.FormatInt(time.Now().UnixNano(), 10)
	user.TimeLeftInSec = sessionExpiredTimeSec
	return user
}

type SessionManager struct {
	sessions map[string]LogonUser
}

func NewSessionManager() *SessionManager {
	sm := SessionManager{}
	sm.sessions = make(map[string]LogonUser)
	return &sm
}

func (s *SessionManager) GetLogonUser(sessionId string) LogonUser {
	user, exists := s.sessions[sessionId]
	if exists && user.TimeLeftInSec > 0 {
		return user 
	}
	return LogonUser{}
}

func (s *SessionManager) IsLogon(sessionId string) bool {
	user, exists := s.sessions[sessionId]
	if exists && user.TimeLeftInSec > 0 {
		return true
	}
	return false
}

func (s *SessionManager) Login(name string, password string) (*LogonUser, error) {
	// validate user/password
	user := getUser(name)
	if user.Name == "" || user.Password != password {
		log.Printf("Wrong user name or password: '%s'/'%s'-'%s'/'%s'\n", user.Name, user.Password, name, password)
		return nil, errors.New("Wrong user name or password")
	}

	newUser := NewLogonUser(name)
	s.sessions[newUser.SessionId] = newUser
	return &newUser, nil
}

func (s *SessionManager) Logout(sessionId string) *LogonUser {
	user, exist := s.sessions[sessionId]
	if exist {
		delete(s.sessions, sessionId)
		return &user
	}
	return nil
}

func (s *SessionManager) RenewSession(sessionId string) {
	user, exist := s.sessions[sessionId]
	if exist && user.TimeLeftInSec > 0 {
		user.TimeLeftInSec = sessionExpiredTimeSec
	}
}

func (s *SessionManager) UpdateSessionTime(numSecs int) {
	for id, user := range s.sessions {
		user.TimeLeftInSec -= numSecs
		if user.TimeLeftInSec <= 0 {
			log.Printf("Session %s(%s) has expired, removed from cache\n", user.Name, id)
			delete(s.sessions, id)
		}
	}
}
