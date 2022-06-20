///
//  Generated code. Do not modify.
//  source: tusach.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $2;

import 'tusach.pbenum.dart';

export 'tusach.pbenum.dart';

class LoginRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('LoginRequest', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..aOS(1, 'provider')
    ..hasRequiredFields = false
  ;

  LoginRequest._() : super();
  factory LoginRequest() => create();
  factory LoginRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory LoginRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  LoginRequest clone() => LoginRequest()..mergeFromMessage(this);
  LoginRequest copyWith(void Function(LoginRequest) updates) => super.copyWith((message) => updates(message as LoginRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static LoginRequest create() => LoginRequest._();
  LoginRequest createEmptyInstance() => create();
  static $pb.PbList<LoginRequest> createRepeated() => $pb.PbList<LoginRequest>();
  @$core.pragma('dart2js:noInline')
  static LoginRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<LoginRequest>(create);
  static LoginRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get provider => $_getSZ(0);
  @$pb.TagNumber(1)
  set provider($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasProvider() => $_has(0);
  @$pb.TagNumber(1)
  void clearProvider() => clearField(1);
}

class LoginReply extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('LoginReply', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..aOS(1, 'jwt')
    ..hasRequiredFields = false
  ;

  LoginReply._() : super();
  factory LoginReply() => create();
  factory LoginReply.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory LoginReply.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  LoginReply clone() => LoginReply()..mergeFromMessage(this);
  LoginReply copyWith(void Function(LoginReply) updates) => super.copyWith((message) => updates(message as LoginReply));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static LoginReply create() => LoginReply._();
  LoginReply createEmptyInstance() => create();
  static $pb.PbList<LoginReply> createRepeated() => $pb.PbList<LoginReply>();
  @$core.pragma('dart2js:noInline')
  static LoginReply getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<LoginReply>(create);
  static LoginReply _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get jwt => $_getSZ(0);
  @$pb.TagNumber(1)
  set jwt($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasJwt() => $_has(0);
  @$pb.TagNumber(1)
  void clearJwt() => clearField(1);
}

class User extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('User', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..aOS(1, 'name')
    ..aOS(2, 'roles')
    ..hasRequiredFields = false
  ;

  User._() : super();
  factory User() => create();
  factory User.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory User.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  User clone() => User()..mergeFromMessage(this);
  User copyWith(void Function(User) updates) => super.copyWith((message) => updates(message as User));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static User create() => User._();
  User createEmptyInstance() => create();
  static $pb.PbList<User> createRepeated() => $pb.PbList<User>();
  @$core.pragma('dart2js:noInline')
  static User getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<User>(create);
  static User _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get roles => $_getSZ(1);
  @$pb.TagNumber(2)
  set roles($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasRoles() => $_has(1);
  @$pb.TagNumber(2)
  void clearRoles() => clearField(2);
}

class SystemInfo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('SystemInfo', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..aOM<$2.Timestamp>(1, 'systemUpTime', subBuilder: $2.Timestamp.create)
    ..aOM<$2.Timestamp>(2, 'bookLastUpdatedTime', subBuilder: $2.Timestamp.create)
    ..hasRequiredFields = false
  ;

  SystemInfo._() : super();
  factory SystemInfo() => create();
  factory SystemInfo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SystemInfo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  SystemInfo clone() => SystemInfo()..mergeFromMessage(this);
  SystemInfo copyWith(void Function(SystemInfo) updates) => super.copyWith((message) => updates(message as SystemInfo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SystemInfo create() => SystemInfo._();
  SystemInfo createEmptyInstance() => create();
  static $pb.PbList<SystemInfo> createRepeated() => $pb.PbList<SystemInfo>();
  @$core.pragma('dart2js:noInline')
  static SystemInfo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SystemInfo>(create);
  static SystemInfo _defaultInstance;

  @$pb.TagNumber(1)
  $2.Timestamp get systemUpTime => $_getN(0);
  @$pb.TagNumber(1)
  set systemUpTime($2.Timestamp v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSystemUpTime() => $_has(0);
  @$pb.TagNumber(1)
  void clearSystemUpTime() => clearField(1);
  @$pb.TagNumber(1)
  $2.Timestamp ensureSystemUpTime() => $_ensure(0);

  @$pb.TagNumber(2)
  $2.Timestamp get bookLastUpdatedTime => $_getN(1);
  @$pb.TagNumber(2)
  set bookLastUpdatedTime($2.Timestamp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasBookLastUpdatedTime() => $_has(1);
  @$pb.TagNumber(2)
  void clearBookLastUpdatedTime() => clearField(2);
  @$pb.TagNumber(2)
  $2.Timestamp ensureBookLastUpdatedTime() => $_ensure(1);
}

class BookID extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('BookID', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..a<$core.int>(1, 'id', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  BookID._() : super();
  factory BookID() => create();
  factory BookID.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BookID.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  BookID clone() => BookID()..mergeFromMessage(this);
  BookID copyWith(void Function(BookID) updates) => super.copyWith((message) => updates(message as BookID));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BookID create() => BookID._();
  BookID createEmptyInstance() => create();
  static $pb.PbList<BookID> createRepeated() => $pb.PbList<BookID>();
  @$core.pragma('dart2js:noInline')
  static BookID getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BookID>(create);
  static BookID _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get id => $_getIZ(0);
  @$pb.TagNumber(1)
  set id($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);
}

class Book extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Book', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..a<$core.int>(1, 'id', $pb.PbFieldType.O3)
    ..e<BookStatusType>(2, 'status', $pb.PbFieldType.OE, defaultOrMaker: BookStatusType.NONE, valueOf: BookStatusType.valueOf, enumValues: BookStatusType.values)
    ..aOS(3, 'title')
    ..aOS(4, 'author')
    ..aOM<$2.Timestamp>(5, 'createdTime', subBuilder: $2.Timestamp.create)
    ..aOS(6, 'createdBy')
    ..a<$core.int>(7, 'buildTimeSec', $pb.PbFieldType.O3)
    ..aOS(8, 'startPageUrl')
    ..aOS(9, 'currentPageUrl')
    ..a<$core.int>(10, 'currentPageNo', $pb.PbFieldType.O3)
    ..a<$core.int>(11, 'maxNumPages', $pb.PbFieldType.O3)
    ..aOM<$2.Timestamp>(12, 'lastUpdatedTime', subBuilder: $2.Timestamp.create)
    ..aOS(13, 'errorMsg')
    ..aOB(14, 'epubCreated')
    ..aOB(15, 'deleted')
    ..hasRequiredFields = false
  ;

  Book._() : super();
  factory Book() => create();
  factory Book.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Book.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Book clone() => Book()..mergeFromMessage(this);
  Book copyWith(void Function(Book) updates) => super.copyWith((message) => updates(message as Book));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Book create() => Book._();
  Book createEmptyInstance() => create();
  static $pb.PbList<Book> createRepeated() => $pb.PbList<Book>();
  @$core.pragma('dart2js:noInline')
  static Book getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Book>(create);
  static Book _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get id => $_getIZ(0);
  @$pb.TagNumber(1)
  set id($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  BookStatusType get status => $_getN(1);
  @$pb.TagNumber(2)
  set status(BookStatusType v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasStatus() => $_has(1);
  @$pb.TagNumber(2)
  void clearStatus() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get title => $_getSZ(2);
  @$pb.TagNumber(3)
  set title($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTitle() => $_has(2);
  @$pb.TagNumber(3)
  void clearTitle() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get author => $_getSZ(3);
  @$pb.TagNumber(4)
  set author($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasAuthor() => $_has(3);
  @$pb.TagNumber(4)
  void clearAuthor() => clearField(4);

  @$pb.TagNumber(5)
  $2.Timestamp get createdTime => $_getN(4);
  @$pb.TagNumber(5)
  set createdTime($2.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedTime() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedTime() => clearField(5);
  @$pb.TagNumber(5)
  $2.Timestamp ensureCreatedTime() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get createdBy => $_getSZ(5);
  @$pb.TagNumber(6)
  set createdBy($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasCreatedBy() => $_has(5);
  @$pb.TagNumber(6)
  void clearCreatedBy() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get buildTimeSec => $_getIZ(6);
  @$pb.TagNumber(7)
  set buildTimeSec($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasBuildTimeSec() => $_has(6);
  @$pb.TagNumber(7)
  void clearBuildTimeSec() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get startPageUrl => $_getSZ(7);
  @$pb.TagNumber(8)
  set startPageUrl($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasStartPageUrl() => $_has(7);
  @$pb.TagNumber(8)
  void clearStartPageUrl() => clearField(8);

  @$pb.TagNumber(9)
  $core.String get currentPageUrl => $_getSZ(8);
  @$pb.TagNumber(9)
  set currentPageUrl($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasCurrentPageUrl() => $_has(8);
  @$pb.TagNumber(9)
  void clearCurrentPageUrl() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get currentPageNo => $_getIZ(9);
  @$pb.TagNumber(10)
  set currentPageNo($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasCurrentPageNo() => $_has(9);
  @$pb.TagNumber(10)
  void clearCurrentPageNo() => clearField(10);

  @$pb.TagNumber(11)
  $core.int get maxNumPages => $_getIZ(10);
  @$pb.TagNumber(11)
  set maxNumPages($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasMaxNumPages() => $_has(10);
  @$pb.TagNumber(11)
  void clearMaxNumPages() => clearField(11);

  @$pb.TagNumber(12)
  $2.Timestamp get lastUpdatedTime => $_getN(11);
  @$pb.TagNumber(12)
  set lastUpdatedTime($2.Timestamp v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasLastUpdatedTime() => $_has(11);
  @$pb.TagNumber(12)
  void clearLastUpdatedTime() => clearField(12);
  @$pb.TagNumber(12)
  $2.Timestamp ensureLastUpdatedTime() => $_ensure(11);

  @$pb.TagNumber(13)
  $core.String get errorMsg => $_getSZ(12);
  @$pb.TagNumber(13)
  set errorMsg($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasErrorMsg() => $_has(12);
  @$pb.TagNumber(13)
  void clearErrorMsg() => clearField(13);

  @$pb.TagNumber(14)
  $core.bool get epubCreated => $_getBF(13);
  @$pb.TagNumber(14)
  set epubCreated($core.bool v) { $_setBool(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasEpubCreated() => $_has(13);
  @$pb.TagNumber(14)
  void clearEpubCreated() => clearField(14);

  @$pb.TagNumber(15)
  $core.bool get deleted => $_getBF(14);
  @$pb.TagNumber(15)
  set deleted($core.bool v) { $_setBool(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasDeleted() => $_has(14);
  @$pb.TagNumber(15)
  void clearDeleted() => clearField(15);
}

class BookList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('BookList', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..pc<Book>(1, 'books', $pb.PbFieldType.PM, subBuilder: Book.create)
    ..aOB(2, 'isFullList')
    ..hasRequiredFields = false
  ;

  BookList._() : super();
  factory BookList() => create();
  factory BookList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BookList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  BookList clone() => BookList()..mergeFromMessage(this);
  BookList copyWith(void Function(BookList) updates) => super.copyWith((message) => updates(message as BookList));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BookList create() => BookList._();
  BookList createEmptyInstance() => create();
  static $pb.PbList<BookList> createRepeated() => $pb.PbList<BookList>();
  @$core.pragma('dart2js:noInline')
  static BookList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BookList>(create);
  static BookList _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Book> get books => $_getList(0);

  @$pb.TagNumber(2)
  $core.bool get isFullList => $_getBF(1);
  @$pb.TagNumber(2)
  set isFullList($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasIsFullList() => $_has(1);
  @$pb.TagNumber(2)
  void clearIsFullList() => clearField(2);
}

class NewBookRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('NewBookRequest', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..aOS(1, 'title')
    ..aOS(2, 'startPageUrl')
    ..aOS(3, 'author')
    ..a<$core.int>(4, 'maxNumPages', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  NewBookRequest._() : super();
  factory NewBookRequest() => create();
  factory NewBookRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NewBookRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  NewBookRequest clone() => NewBookRequest()..mergeFromMessage(this);
  NewBookRequest copyWith(void Function(NewBookRequest) updates) => super.copyWith((message) => updates(message as NewBookRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NewBookRequest create() => NewBookRequest._();
  NewBookRequest createEmptyInstance() => create();
  static $pb.PbList<NewBookRequest> createRepeated() => $pb.PbList<NewBookRequest>();
  @$core.pragma('dart2js:noInline')
  static NewBookRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NewBookRequest>(create);
  static NewBookRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get title => $_getSZ(0);
  @$pb.TagNumber(1)
  set title($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTitle() => $_has(0);
  @$pb.TagNumber(1)
  void clearTitle() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get startPageUrl => $_getSZ(1);
  @$pb.TagNumber(2)
  set startPageUrl($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasStartPageUrl() => $_has(1);
  @$pb.TagNumber(2)
  void clearStartPageUrl() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get author => $_getSZ(2);
  @$pb.TagNumber(3)
  set author($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAuthor() => $_has(2);
  @$pb.TagNumber(3)
  void clearAuthor() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get maxNumPages => $_getIZ(3);
  @$pb.TagNumber(4)
  set maxNumPages($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasMaxNumPages() => $_has(3);
  @$pb.TagNumber(4)
  void clearMaxNumPages() => clearField(4);
}

class Chapter extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Chapter', package: const $pb.PackageName('model'), createEmptyInstance: create)
    ..a<$core.int>(1, 'chapterNo', $pb.PbFieldType.O3)
    ..a<$core.int>(2, 'bookId', $pb.PbFieldType.O3)
    ..aOS(3, 'title')
    ..a<$core.List<$core.int>>(4, 'html', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  Chapter._() : super();
  factory Chapter() => create();
  factory Chapter.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Chapter.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Chapter clone() => Chapter()..mergeFromMessage(this);
  Chapter copyWith(void Function(Chapter) updates) => super.copyWith((message) => updates(message as Chapter));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Chapter create() => Chapter._();
  Chapter createEmptyInstance() => create();
  static $pb.PbList<Chapter> createRepeated() => $pb.PbList<Chapter>();
  @$core.pragma('dart2js:noInline')
  static Chapter getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Chapter>(create);
  static Chapter _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get chapterNo => $_getIZ(0);
  @$pb.TagNumber(1)
  set chapterNo($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChapterNo() => $_has(0);
  @$pb.TagNumber(1)
  void clearChapterNo() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get bookId => $_getIZ(1);
  @$pb.TagNumber(2)
  set bookId($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBookId() => $_has(1);
  @$pb.TagNumber(2)
  void clearBookId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get title => $_getSZ(2);
  @$pb.TagNumber(3)
  set title($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTitle() => $_has(2);
  @$pb.TagNumber(3)
  void clearTitle() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get html => $_getN(3);
  @$pb.TagNumber(4)
  set html($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHtml() => $_has(3);
  @$pb.TagNumber(4)
  void clearHtml() => clearField(4);
}

