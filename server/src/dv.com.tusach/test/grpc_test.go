package test

import (
	"context"
	"log"
	"testing"
	"time"

	"github.com/golang/protobuf/ptypes/empty"
	"google.golang.org/grpc"

	"dv.com.tusach/model"
)

const (
	address = "192.168.43.20:9999"
)

func Test(t *testing.T) {
	// test assume that the grpc is already up and running on port 9999

	log.Printf("connecting to grpc server: %s\n", address)
	// Set up a connection to the server.
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		t.Errorf("failed to connect to grpc server: %v\n", err)
		t.FailNow()
	}
	defer conn.Close()
	log.Println("connected to grpc server")
	client := model.NewTusachClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	log.Println("getting books from grpc server...")
	bookList, err := client.GetBooks(ctx, &empty.Empty{})
	if err != nil {
		t.Errorf("failed to GetBooks from grpc server: %v\n", err)
		t.FailNow()
	}
	log.Printf("bookList: %+v\n", bookList)
}
