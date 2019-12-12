package grpc

import (
	"context"
	"fmt"
	"io"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/golang/protobuf/ptypes/empty"
	"google.golang.org/grpc"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
)

const (
	address = "localhost:9999"
)

var bookMaker *maker.BookMaker

func TestMain(m *testing.M) {
	// set up rest server
	util.LoadConfig("../../test/config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	bookMaker = maker.NewBookMaker(&db)
	grpcApp := GrpcServer{}
	go func() {
		err := grpcApp.Start(bookMaker)
		if err != nil {
			logger.Errorf("Failed to start GRPC server: %s", err)
			os.Exit(1)
		} else {
			logger.Infof("GRPC server started")
		}
	}()
	// delay waiting for server to start
	fmt.Println("waiting for grpcserver to start")
	time.Sleep(5 * time.Second)
	fmt.Println("executing unit test...")
	retval := m.Run()
	fmt.Println("test return code: " + strconv.Itoa(retval))
	os.Exit(retval)
}

func Test_Connection(t *testing.T) {
	t.Logf("connecting to grpc server: %s\n", address)
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		t.Errorf("failed to connect to grpc server: %v\n", err)
		t.FailNow()
	}
	defer conn.Close()
	fmt.Println("connected to grpc server")
	client := model.NewTusachClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	fmt.Println("getting books from grpc server...")
	bookList, err := client.GetBooks(ctx, &empty.Empty{})
	if err != nil {
		t.Fatalf("failed to GetBooks from grpc server: %v\n", err)
		t.FailNow()
	}
	t.Logf("bookList: %+v\n", bookList)
}

func Test_Subscribe(t *testing.T) {
	t.Logf("connecting to grpc server: %s\n", address)
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		t.Errorf("failed to connect to grpc server: %v\n", err)
		t.FailNow()
	}
	defer conn.Close()
	fmt.Println("connected to grpc server")
	client := model.NewTusachClient(conn)

	// Contact the server and print out its response.
	//ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	//defer cancel()
	fmt.Println("subscribe book from grpc server...")
	stream, err := client.Subscribe(context.Background(), &empty.Empty{})
	if err != nil {
		t.Errorf("failed to subscribe from grpc server: %v\n", err)
		t.FailNow()
	}

	go func() {
		fmt.Println("simulate book update on grpc server...")
		time.Sleep(2 * time.Second)
		book := model.Book{Title: "grpcserver_test_title1", Status: model.BookStatusType_IN_PROGRESS}
		fmt.Println("simulate book create")
		bookMaker.CreateBook(book)
		time.Sleep(2 * time.Second)
		err := bookMaker.AbortBook(book.Id)
		if err != nil {
			t.Logf("failed to abort book: %s\n", err.Error())
		}
	}()

	for {
		book, err := stream.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			t.Errorf("Error while streaming: %v\n", err)
			break
		}
		t.Logf("Book from stream: %v\n", book)
	}
}
