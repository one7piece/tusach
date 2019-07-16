package grpc

import (
	"context"
	"fmt"
	"io"
	"os"
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
	address = "192.168.1.108:8080"
)

var bookMaker *maker.BookMaker

func TestMain(m *testing.M) {
	// set up rest server
	util.LoadConfig("../../../../test/config-test.json")
	db := persistence.FileDB{}
	db.InitDB()
	bookMaker = maker.NewBookMaker(&db)
	grpcApp := GrpcServer{}
	go func() {
		err := grpcApp.Start(bookMaker)
		if err != nil {
			logger.Errorf("Failed to start GRPC server: %s", err)
			os.Exit(1)
		}
	}()
	// delay waiting for server to start
	fmt.Println("waiting for grpcserver to start")
	time.Sleep(5 * time.Second)
	m.Run()
	os.Exit(0)
}

func Test_Connection(t *testing.T) {
	fmt.Printf("connecting to grpc server: %s\n", address)
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
		t.Errorf("failed to GetBooks from grpc server: %v\n", err)
		t.FailNow()
	}
	fmt.Printf("bookList: %+v\n", bookList)
}

func Test_Subscribe(t *testing.T) {
	fmt.Printf("connecting to grpc server: %s\n", address)
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
			fmt.Printf("failed to abort book: %s\n", err.Error())
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
		fmt.Printf("Book from stream: %v\n", book)
	}
}
