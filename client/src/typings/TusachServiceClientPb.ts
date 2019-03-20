/**
 * @fileoverview gRPC-Web generated client stub for model
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  Empty,
  Timestamp,
  Book,
  BookList} from './tusach_pb';

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
    (request: Empty) => {
      return request.serializeBinary();
    },
    BookList.deserializeBinary
  );

  getBooks(
    request: Empty,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: BookList) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/model.Tusach/GetBooks',
      request,
      metadata,
      this.methodInfoGetBooks,
      callback);
  }

}

