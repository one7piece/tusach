package rest

import (
	"errors"
	"io/ioutil"
	"net/http"
	_ "net/http/pprof"
	"strconv"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/dgrijalva/jwt-go"
	"github.com/husobee/vestigo"
)

type IAuthHandler interface {
	Auth(w http.ResponseWriter, r *http.Request) bool
}

type JWTTokenClaims struct {
	UserId       string
	Role         string
	EmailAddress string
	jwt.StandardClaims
}

type RestServer struct {
	bookMaker *maker.BookMaker
	marshaler JsonMarshaler
}

func (app *RestServer) ProcessEvent(event util.EventData) {
	logger.Infof("Received book event: %s (%v)", event.Type, event.Data)
	_, ok := event.Data.(model.Book)
	if ok {
		//info := server.BookMaker..GetSystemInfo()
		//logger.Infof("System info: %v", info)
	}
}

func (app *RestServer) Start(bookMaker *maker.BookMaker) error {
	app.bookMaker = bookMaker
	app.marshaler = JsonPbMarshaler{}

	var authWrap HandlerFuncEx
	if len(util.GetConfiguration().OAuthUserFiles) > 0 {
		authImpl := &OAuth2Impl{marshaler: app.marshaler}
		authWrap = authImpl.Auth
	}
	logger.Infof("Register event listening on channel %s", "BOOK-CHANNEL")
	util.GetEventManager().StartListening("BOOK-CHANNEL", app)

	router := vestigo.NewRouter()
	// you can enable trace by setting this to true
	vestigo.AllowTrace = true

	mware := chain( /*recoverWrap,*/ traceWrap, enableCors, authWrap)
	router.Get("/tusach/book/get/:id", mware(app.GetBook))
	router.Get("/tusach/book/list/:timestamp", mware(app.GetBooks))
	router.Post("/tusach/book/command/:cmd", mware(app.UpdateBook))
	router.Get("/login/:provider", mware(app.Login))
	router.Get("/oauth/google/callback", mware(app.OAuthCallback))
	router.Get("/*", mware(app.Other))

	// TODO handle CORS

	// oauth redirect handler
	//http.HandleFunc("/oauth/drive/redirect", app.oauthDriveRedirect)

	// api handler
	http.Handle("/api/", http.StripPrefix("/api", router))
	// download file handler
	http.HandleFunc("/tusach/download/", app.downloadBook)
	// static file handler
	http.Handle("/", http.FileServer(http.Dir(util.GetConfiguration().ServerPath)))

	sslCert := util.GetConfiguration().SslCert
	sslKey := util.GetConfiguration().SslKey
	if sslCert != "" && sslKey != "" {
		logger.Infof("Starting HTTPS rest server on port: " + strconv.Itoa(util.GetConfiguration().ServerBindPort))
		if err := http.ListenAndServeTLS(util.GetConfiguration().ServerBindAddress+":"+
			strconv.Itoa(util.GetConfiguration().ServerBindPort), sslCert, sslKey, nil); err != nil {
			logger.Errorf("!!!ERROR!!! %s", err)
			return err
		}
	} else {
		logger.Infof("Starting HTTP rest server on port: " + strconv.Itoa(util.GetConfiguration().ServerBindPort))
		if err := http.ListenAndServe(util.GetConfiguration().ServerBindAddress+":"+
			strconv.Itoa(util.GetConfiguration().ServerBindPort), nil); err != nil {
			logger.Errorf("!!!ERROR!!! %s", err)
			return err
		}
	}
	return nil
}

func (app *RestServer) downloadBook(w http.ResponseWriter, r *http.Request) {
	bookId, err := strconv.Atoi(r.URL.Query().Get("bookId"))
	if err != nil {
		http.Error(w, "Invalid book.Id", http.StatusBadRequest)
		return
	}

	// find the book
	book := app.bookMaker.GetBook(int32(bookId))
	if book.Id == 0 {
		http.Error(w, "Invalid book.Id", http.StatusBadRequest)
		return
	}

	epubFile := persistence.GetBookEpubFilename(book)
	data, err := ioutil.ReadFile(epubFile)
	if err != nil {
		logger.Error("Failed to read epub file (bookId=" + strconv.Itoa(int(book.Id)) + "): " + err.Error())
		http.Error(w, "Failed to read epub file: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Content-Type", "application/epub+zip")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))

	w.Write(data)
}

func (app *RestServer) Login(w http.ResponseWriter, r *http.Request) {
	provider := vestigo.Param(r, "provider")
	logger.Infof("Login - provider:%s", provider)
	userRes := util.GetOAuthUserResource(provider)
	if userRes == nil {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid provider: '"+provider+"'")
		return
	}
	// return the redirect url

}

func (app *RestServer) OAuthCallback(w http.ResponseWriter, r *http.Request) {

}

func (app *RestServer) Other(w http.ResponseWriter, r *http.Request) {

}

func (app *RestServer) GetBook(w http.ResponseWriter, r *http.Request) {
	idstr := vestigo.Param(r, "id")
	logger.Infof("GetBook - id:%s", idstr)
	id, err := strconv.ParseInt(idstr, 10, 32)
	if err != nil {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid book id: '"+idstr+"'")
		return
	}
	book := app.bookMaker.GetBook(int32(id))
	logger.Debugf("loaded book: %+v", book)
	if book.Id == int32(id) {
		app.marshaler.SetResponseValue(w, &book)
	} else {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Book not found: '"+idstr+"'")
	}
}

func (app *RestServer) GetBooks(w http.ResponseWriter, r *http.Request) {
	timestr := vestigo.Param(r, "timestamp")
	timestamp, err := strconv.ParseInt(timestr, 10, 64)
	if err != nil {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid timestamp: '"+timestr+"'")
		return
	}
	systemInfo := app.bookMaker.GetSystemInfo()
	systemTimestamp := util.Timestamp2UnixTime(systemInfo.SystemUpTime)
	requestTimeStr := util.Time2String(util.UnixTime2Time(timestamp))
	systemTimeStr := util.Time2String(util.UnixTime2Time(systemTimestamp))
	logger.Infof("GetBooks - timestamp:%d(%s), systemUpTime:%d(%s)",
		timestamp, requestTimeStr, systemTimestamp, systemTimeStr)
	bookList := model.BookList{}
	if timestr == "0" {
		bookList.IsFullList = true
		books := app.bookMaker.GetBooks(false)
		bookList.Books = []*model.Book{}
		// NOTE: the loop using range will not work:
		// for _, book := range books {
		//	bookList.Books = append(bookList.Books, &book)
		// }
		for i := 0; i < len(books); i++ {
			bookList.Books = append(bookList.Books, &books[i])
		}
	} else {
		books := app.bookMaker.GetBooks(true)
		// find the book
		bookList.Books = []*model.Book{}
		bookList.IsFullList = false
		for i := 0; i < len(books); i++ {
			if util.Timestamp2UnixTime(books[i].LastUpdatedTime) > timestamp {
				bookList.Books = append(bookList.Books, &books[i])
				logger.Infof("GetBooks - found matched book: %v", books[i])
			}
		}
	}
	logger.Infof("GetBooks - #book found:%d", len(bookList.Books))
	app.marshaler.SetResponseValue(w, &bookList)
}

func (app *RestServer) UpdateBook(w http.ResponseWriter, r *http.Request) {
	op := vestigo.Param(r, "cmd")
	logger.Infof("UpdateBook - op:%s", op)
	if op != "create" && op != "abort" && op != "resume" && op != "update" && op != "delete" {
		logger.Error("Invalid op value: " + op)
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid op value: "+op)
		return
	}

	if op == "create" {
		app.CreateBook(w, r)
		return
	}

	updateBook := model.Book{}
	_, err := app.marshaler.GetRequestPayload(r, &updateBook)
	if err != nil {
		logger.Errorf("Invalid request book payload [%s] %v\n", r.Body, err)
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid request book payload: "+err.Error())
		return
	}

	currentBook := app.bookMaker.GetBook(updateBook.Id)
	if currentBook.Id == 0 {
		logger.Error("Cannot find book: " + strconv.Itoa(int(updateBook.Id)))
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Cannot find book: "+strconv.Itoa(int(updateBook.Id)))
		return
	}

	logger.Infof("updateBook - op:%s: current book details: %+v", op, updateBook)
	if op == "abort" {
		err = app.bookMaker.AbortBook(updateBook.Id)
	} else if op == "update" {
		err = app.bookMaker.UpdateBook(updateBook)
	} else if op == "resume" {
		err = app.bookMaker.ResumeBook(updateBook.Id)
	} else if op == "delete" {
		err = app.bookMaker.DeleteBook(updateBook.Id)
	} else {
		err = errors.New("Unknown operation: " + op)
	}
	if err != nil {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, err.Error())
	} else {
		app.marshaler.SetResponseOK(w)
	}
}

func (app *RestServer) CreateBook(w http.ResponseWriter, r *http.Request) {
	newBook := model.Book{}
	_, err := app.marshaler.GetRequestPayload(r, &newBook)
	if err != nil {
		logger.Errorf("Invalid request book payload: %v\n", err)
		app.marshaler.SetResponseError(w, http.StatusInternalServerError, "Invalid request book payload: "+err.Error())
		return
	}

	// validate
	if newBook.Title == "" {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Missing book title")
		return
	}
	if newBook.StartPageUrl == "" {
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Missing start page URL")
		return
	}

	newBook.CreatedBy = ""
	userId := r.Context().Value("user")
	if userId != nil {
		newBook.CreatedBy = userId.(string)
	}

	// prevent too many concurrent books creation
	numActive := 0
	for _, book := range app.bookMaker.GetBooks(false) {
		if book.Status == model.BookStatusType_IN_PROGRESS {
			numActive++
		}
	}
	if numActive >= util.GetConfiguration().MaxActionBooks {
		logger.Error("Too many concurrent books in progress (" + strconv.Itoa(numActive) + ")")
		app.marshaler.SetResponseError(w, http.StatusBadRequest, "Too many concurrent books in progress")
		return
	}

	// schedule goroutine to create book
	err = app.bookMaker.CreateBook(newBook)
	if err != nil {
		logger.Error("Failed to create book: " + err.Error())
		app.marshaler.SetResponseError(w, http.StatusInternalServerError, err.Error())
		return
	}

	app.marshaler.SetResponseValue(w, &newBook)
}
