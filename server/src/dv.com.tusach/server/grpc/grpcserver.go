package grpc

import (
	"context"
	"errors"
	"log"
	"net"
	"strconv"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
	"github.com/golang/protobuf/ptypes/empty"
	"github.com/golang/protobuf/ptypes/timestamp"
	"google.golang.org/grpc"
)

// server is used to implement tusach service interface
type GrpcServer struct {
	bookMaker *maker.BookMaker
	sinks     []*GrpcEventSink
}

type GrpcEventSink struct {
	subsriber    model.Tusach_SubscribeServer
	notifier     chan string
	lastSentTime int64
}

func (sink *GrpcEventSink) ProcessEvent(event util.EventData) {
	book, ok := event.Data.(model.Book)
	if ok {
		logger.Infof("(%v) Received book event: %s (%v)", sink.subsriber, event.Type, book)
		err := sink.subsriber.Send(&book)
		if err != nil {
			logger.Errorf("(%v) Error while streaming book: %s", sink.subsriber, err.Error())
			util.GetEventManager().StopListening(sink)
			sink.notifier <- err.Error()
		}
	}
}

func (sink *GrpcEventSink) SendHeartbeat(book *model.Book) {
	logger.Infof("(%v) Sending heartbeat book event: (%v)", sink.subsriber, book)
	err := sink.subsriber.Send(book)
	if err != nil {
		logger.Errorf("(%v) Error while streaming book: %s", sink.subsriber, err.Error())
		util.GetEventManager().StopListening(sink)
		sink.notifier <- err.Error()
	}
}

func (app *GrpcServer) Start(bookMaker *maker.BookMaker) error {
	logger.Infof("Starting GRPC server on port: " + strconv.Itoa(util.GetConfiguration().GrpcBindPort))
	app.bookMaker = bookMaker

	lis, err := net.Listen("tcp", ":"+strconv.Itoa(util.GetConfiguration().GrpcBindPort))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	model.RegisterTusachServer(s, app)

	ticker := time.NewTicker(60 * time.Second)
	done := make(chan bool)
	go func() {
		for {
			select {
			case <-done:
				//logger.Infof("heartbeat timer stop")
				return
			case <-ticker.C:
				logger.Infof("execute heartbeat timer, %d sinks", len(app.sinks))
				book := model.Book{}
				// go thru each sink and send dummy book
				for _, sink := range app.sinks {
					sink.SendHeartbeat(&book)
				}
			}
		}
	}()

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

	return nil
}

func (app *GrpcServer) Subscribe(empty *empty.Empty, sub model.Tusach_SubscribeServer) error {
	logger.Infof("Received book subscription, registering for book events")
	ch := make(chan string)
	sink := GrpcEventSink{subsriber: sub, notifier: ch}
	logger.Infof("Register event listening on channel %s", "BOOK-CHANNEL")
	util.GetEventManager().StartListening("BOOK-CHANNEL", &sink)
	app.sinks = append(app.sinks, &sink)
	// block until notify via channel
	errorMsg := <-ch
	// stop listening
	util.GetEventManager().StopListening(&sink)
	// removing from cache
	index := util.FindArrayItemIndex(app.sinks, &sink)
	if index != -1 {
		app.sinks = append(app.sinks[:index], app.sinks[index+1:]...)
	}
	logger.Infof("Book subscription ends: %s", errorMsg)
	return nil
}

func (app *GrpcServer) GetBooks(ctx context.Context, empty *empty.Empty) (*model.BookList, error) {
	return app.QueryBooks(ctx, nil)
}

func (app *GrpcServer) QueryBooks(ctx context.Context, t *timestamp.Timestamp) (*model.BookList, error) {
	logger.Infof("QueryBooks - timestamp:%v", t)
	systemInfo := app.bookMaker.GetSystemInfo()
	bookList := model.BookList{}
	if t == nil || util.Timestamp2UnixTime(t) < util.Timestamp2UnixTime(systemInfo.SystemUpTime) {
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
			if util.Timestamp2UnixTime(books[i].LastUpdatedTime) > util.Timestamp2UnixTime(t) {
				bookList.Books = append(bookList.Books, &books[i])
			}
		}
	}

	return &bookList, nil
}

func (app *GrpcServer) GetBook(ctx context.Context, id *model.BookID) (*model.Book, error) {
	if id == nil {
		return nil, errors.New("Invalid bookID!")
	}
	logger.Infof("GetBook - id:%d", id.GetId())
	book := app.bookMaker.GetBook(id.GetId())
	if book.GetId() != id.GetId() {
		return nil, errors.New("Book " + strconv.Itoa(int(id.GetId())) + " not found")
	}
	return &book, nil
}

func (app *GrpcServer) CreateBook(ctx context.Context, newBook *model.NewBookRequest) (*model.Book, error) {
	logger.Infof("CreateBook - %v", newBook)
	// validate
	if newBook.Title == "" {
		return nil, errors.New("Missing book title")
	}
	if newBook.StartPageUrl == "" {
		return nil, errors.New("Missing start page URL")
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
		return nil, errors.New("Too many concurrent books in progress")
	}

	book := model.Book{Title: newBook.Title, Author: newBook.Author, StartPageUrl: newBook.StartPageUrl, MaxNumPages: newBook.MaxNumPages}
	// schedule goroutine to create book
	err := app.bookMaker.CreateBook(book)
	if err != nil {
		logger.Error("Failed to create book: " + err.Error())
		return nil, err
	}

	return &book, nil
}

func (app *GrpcServer) UpdateBook(ctx context.Context, book *model.Book) (*model.Book, error) {
	logger.Infof("UpdateBook - %v", book)
	err := app.bookMaker.UpdateBook(*book)
	if err != nil {
		return nil, err
	}
	currentBook := app.bookMaker.GetBook(book.Id)
	return &currentBook, nil
}

func (app *GrpcServer) DeleteBook(ctx context.Context, id *model.BookID) (*empty.Empty, error) {
	logger.Infof("DeleteBook - %v", id)
	err := app.bookMaker.DeleteBook(id.GetId())
	val := empty.Empty{}
	return &val, err
}

func (app *GrpcServer) AbortBook(ctx context.Context, id *model.BookID) (*empty.Empty, error) {
	logger.Infof("AbortBook - %v", id)
	err := app.bookMaker.AbortBook(id.GetId())
	val := empty.Empty{}
	return &val, err
}

func (app *GrpcServer) ResumeBook(ctx context.Context, id *model.BookID) (*empty.Empty, error) {
	logger.Infof("ResumeBook - %v", id)
	err := app.bookMaker.ResumeBook(id.GetId())
	val := empty.Empty{}
	return &val, err
}
