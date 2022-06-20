///
//  Generated code. Do not modify.
//  source: tusach.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'google/protobuf/empty.pb.dart' as $0;
import 'tusach.pb.dart' as $1;
import 'google/protobuf/timestamp.pb.dart' as $2;
export 'tusach.pb.dart';

class TusachClient extends $grpc.Client {
  static final _$getBooks = $grpc.ClientMethod<$0.Empty, $1.BookList>(
      '/model.Tusach/GetBooks',
      ($0.Empty value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.BookList.fromBuffer(value));
  static final _$queryBooks = $grpc.ClientMethod<$2.Timestamp, $1.BookList>(
      '/model.Tusach/QueryBooks',
      ($2.Timestamp value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.BookList.fromBuffer(value));
  static final _$subscribe = $grpc.ClientMethod<$0.Empty, $1.Book>(
      '/model.Tusach/Subscribe',
      ($0.Empty value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.Book.fromBuffer(value));
  static final _$getBook = $grpc.ClientMethod<$1.BookID, $1.Book>(
      '/model.Tusach/GetBook',
      ($1.BookID value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.Book.fromBuffer(value));
  static final _$createBook = $grpc.ClientMethod<$1.NewBookRequest, $1.Book>(
      '/model.Tusach/CreateBook',
      ($1.NewBookRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.Book.fromBuffer(value));
  static final _$updateBook = $grpc.ClientMethod<$1.Book, $1.Book>(
      '/model.Tusach/UpdateBook',
      ($1.Book value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.Book.fromBuffer(value));
  static final _$deleteBook = $grpc.ClientMethod<$1.BookID, $0.Empty>(
      '/model.Tusach/DeleteBook',
      ($1.BookID value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Empty.fromBuffer(value));
  static final _$abortBook = $grpc.ClientMethod<$1.BookID, $0.Empty>(
      '/model.Tusach/AbortBook',
      ($1.BookID value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Empty.fromBuffer(value));
  static final _$resumeBook = $grpc.ClientMethod<$1.BookID, $0.Empty>(
      '/model.Tusach/ResumeBook',
      ($1.BookID value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Empty.fromBuffer(value));
  static final _$login = $grpc.ClientMethod<$1.LoginRequest, $1.LoginReply>(
      '/model.Tusach/Login',
      ($1.LoginRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.LoginReply.fromBuffer(value));

  TusachClient($grpc.ClientChannel channel, {$grpc.CallOptions options})
      : super(channel, options: options);

  $grpc.ResponseFuture<$1.BookList> getBooks($0.Empty request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$getBooks, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$1.BookList> queryBooks($2.Timestamp request,
      {$grpc.CallOptions options}) {
    final call = $createCall(
        _$queryBooks, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseStream<$1.Book> subscribe($0.Empty request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$subscribe, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseStream(call);
  }

  $grpc.ResponseFuture<$1.Book> getBook($1.BookID request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$getBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$1.Book> createBook($1.NewBookRequest request,
      {$grpc.CallOptions options}) {
    final call = $createCall(
        _$createBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$1.Book> updateBook($1.Book request,
      {$grpc.CallOptions options}) {
    final call = $createCall(
        _$updateBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$0.Empty> deleteBook($1.BookID request,
      {$grpc.CallOptions options}) {
    final call = $createCall(
        _$deleteBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$0.Empty> abortBook($1.BookID request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$abortBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$0.Empty> resumeBook($1.BookID request,
      {$grpc.CallOptions options}) {
    final call = $createCall(
        _$resumeBook, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }

  $grpc.ResponseFuture<$1.LoginReply> login($1.LoginRequest request,
      {$grpc.CallOptions options}) {
    final call = $createCall(_$login, $async.Stream.fromIterable([request]),
        options: options);
    return $grpc.ResponseFuture(call);
  }
}

abstract class TusachServiceBase extends $grpc.Service {
  $core.String get $name => 'model.Tusach';

  TusachServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Empty, $1.BookList>(
        'GetBooks',
        getBooks_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Empty.fromBuffer(value),
        ($1.BookList value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$2.Timestamp, $1.BookList>(
        'QueryBooks',
        queryBooks_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $2.Timestamp.fromBuffer(value),
        ($1.BookList value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.Empty, $1.Book>(
        'Subscribe',
        subscribe_Pre,
        false,
        true,
        ($core.List<$core.int> value) => $0.Empty.fromBuffer(value),
        ($1.Book value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.BookID, $1.Book>(
        'GetBook',
        getBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.BookID.fromBuffer(value),
        ($1.Book value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.NewBookRequest, $1.Book>(
        'CreateBook',
        createBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.NewBookRequest.fromBuffer(value),
        ($1.Book value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.Book, $1.Book>(
        'UpdateBook',
        updateBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.Book.fromBuffer(value),
        ($1.Book value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.BookID, $0.Empty>(
        'DeleteBook',
        deleteBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.BookID.fromBuffer(value),
        ($0.Empty value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.BookID, $0.Empty>(
        'AbortBook',
        abortBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.BookID.fromBuffer(value),
        ($0.Empty value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.BookID, $0.Empty>(
        'ResumeBook',
        resumeBook_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.BookID.fromBuffer(value),
        ($0.Empty value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$1.LoginRequest, $1.LoginReply>(
        'Login',
        login_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.LoginRequest.fromBuffer(value),
        ($1.LoginReply value) => value.writeToBuffer()));
  }

  $async.Future<$1.BookList> getBooks_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Empty> request) async {
    return getBooks(call, await request);
  }

  $async.Future<$1.BookList> queryBooks_Pre(
      $grpc.ServiceCall call, $async.Future<$2.Timestamp> request) async {
    return queryBooks(call, await request);
  }

  $async.Stream<$1.Book> subscribe_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Empty> request) async* {
    yield* subscribe(call, await request);
  }

  $async.Future<$1.Book> getBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.BookID> request) async {
    return getBook(call, await request);
  }

  $async.Future<$1.Book> createBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.NewBookRequest> request) async {
    return createBook(call, await request);
  }

  $async.Future<$1.Book> updateBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.Book> request) async {
    return updateBook(call, await request);
  }

  $async.Future<$0.Empty> deleteBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.BookID> request) async {
    return deleteBook(call, await request);
  }

  $async.Future<$0.Empty> abortBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.BookID> request) async {
    return abortBook(call, await request);
  }

  $async.Future<$0.Empty> resumeBook_Pre(
      $grpc.ServiceCall call, $async.Future<$1.BookID> request) async {
    return resumeBook(call, await request);
  }

  $async.Future<$1.LoginReply> login_Pre(
      $grpc.ServiceCall call, $async.Future<$1.LoginRequest> request) async {
    return login(call, await request);
  }

  $async.Future<$1.BookList> getBooks($grpc.ServiceCall call, $0.Empty request);
  $async.Future<$1.BookList> queryBooks(
      $grpc.ServiceCall call, $2.Timestamp request);
  $async.Stream<$1.Book> subscribe($grpc.ServiceCall call, $0.Empty request);
  $async.Future<$1.Book> getBook($grpc.ServiceCall call, $1.BookID request);
  $async.Future<$1.Book> createBook(
      $grpc.ServiceCall call, $1.NewBookRequest request);
  $async.Future<$1.Book> updateBook($grpc.ServiceCall call, $1.Book request);
  $async.Future<$0.Empty> deleteBook($grpc.ServiceCall call, $1.BookID request);
  $async.Future<$0.Empty> abortBook($grpc.ServiceCall call, $1.BookID request);
  $async.Future<$0.Empty> resumeBook($grpc.ServiceCall call, $1.BookID request);
  $async.Future<$1.LoginReply> login(
      $grpc.ServiceCall call, $1.LoginRequest request);
}
