package main

import (
	"context"
	"net"
	"google.golang.org/grpc"
)

// server is used to implement tusach service interface
type GrpcServer struct{}

func (s *GrpcServer) GetBooks() (model.BookList, error) {
	return nil
}
func (s *GrpcServer) QueryBooks(t *timestamp.Timestamp) (model.BookList, error) {
	return nil
}

rpc GetSystemInfo(google.protobuf.Empty) returns ( SystemInfo );
rpc CreateBook(NewBookRequest) returns ( Book );
rpc UpdateBook(Book) returns ( Book );
rpc DeleteBook(BookID) returns ( google.protobuf.Empty );

// SayHello implements helloworld.GreeterServer
func (s *GrpcServer) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.Name)
	return &pb.HelloReply{Message: "Hello " + in.Name}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
