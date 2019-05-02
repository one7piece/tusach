/**
 * @fileoverview gRPC-Web generated client stub for model
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  Book,
  BookID,
  BookList,
  NewBookRequest} from './tusach_pb';

export class TusachClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    BookList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    BookList.deserializeBinary
  );

  getBooks(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BookList) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/GetBooks',
      request,
      metadata || {},
      this.methodInfoGetBooks,
      callback);
  }

  methodInfoQueryBooks = new grpcWeb.AbstractClientBase.MethodInfo(
    BookList,
    (request: google_protobuf_timestamp_pb.Timestamp) => {
      return request.serializeBinary();
    },
    BookList.deserializeBinary
  );

  queryBooks(
    request: google_protobuf_timestamp_pb.Timestamp,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BookList) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/QueryBooks',
      request,
      metadata || {},
      this.methodInfoQueryBooks,
      callback);
  }

  methodInfoSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  subscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/model.Tusach/Subscribe',
      request,
      metadata || {},
      this.methodInfoSubscribe);
  }

  methodInfoGetBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: BookID) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  getBook(
    request: BookID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/GetBook',
      request,
      metadata || {},
      this.methodInfoGetBook,
      callback);
  }

  methodInfoCreateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: NewBookRequest) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  createBook(
    request: NewBookRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/CreateBook',
      request,
      metadata || {},
      this.methodInfoCreateBook,
      callback);
  }

  methodInfoUpdateBook = new grpcWeb.AbstractClientBase.MethodInfo(
    Book,
    (request: Book) => {
      return request.serializeBinary();
    },
    Book.deserializeBinary
  );

  updateBook(
    request: Book,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Book) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/UpdateBook',
      request,
      metadata || {},
      this.methodInfoUpdateBook,
      callback);
  }

  methodInfoDeleteBook = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: BookID) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteBook(
    request: BookID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/DeleteBook',
      request,
      metadata || {},
      this.methodInfoDeleteBook,
      callback);
  }

}

