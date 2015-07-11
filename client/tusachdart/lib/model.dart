library tusach.model;

import 'package:polymer/polymer.dart';
import 'dart:convert';
import 'package:intl/intl.dart';

//enum BookStatus { NONE, WORKING, COMPLETED, ERROR, ABORTED }

class Book extends Observable {
  static DateFormat _dateFormater = new DateFormat('dd-MM-yyyy HH:mm');

  @observable int id;
  @observable String title;
  @observable String author;
  @observable DateTime createdTime = DateTime.parse('1970-01-01T01:01:00+00:00');
  @observable String createdBy = "";
  @observable String status = "NONE";
  @observable int buildTimeSec;
  @observable String startPageUrl = "";
  @observable int currentPageNo = 0;
  @observable String currentPageUrl = "";
  @observable int maxNumPages = 0;
  @observable DateTime lastUpdatedTime = DateTime.parse('1970-01-01T01:01:00+00:00');
  @observable String errorMsg = "";
  @observable bool epubCreated = false;

  @observable String get lastUpdatedTimeStr => _dateFormater.format(lastUpdatedTime);
  @observable String get displayTitle => title.length > 25 ? title.substring(0, 25) : title;

  String toString() =>
      "$title - ${_dateFormater.format(lastUpdatedTime)} $status $currentPageNo/$maxNumPages";

  static List<Book> fromJson(String json) {
    List<Book> books = new List<Book>();
    Map map = JSON.decode(json);
    var list = map['books'];
    if (list != null) {
      for (Map item in list) {
        Book book = new Book();
        book.update(item);
        books.add(book);
      }
    }
    return books;
  }

  void copy(Book src) {
    this
      ..id = src.id
      ..author = src.author
      ..buildTimeSec = src.buildTimeSec
      ..createdBy = src.createdBy
      ..createdTime = src.createdTime
      ..currentPageNo = src.currentPageNo
      ..currentPageUrl = src.currentPageUrl
      ..epubCreated = src.epubCreated
      ..errorMsg = src.errorMsg
      ..lastUpdatedTime = src.lastUpdatedTime
      ..maxNumPages = src.maxNumPages
      ..startPageUrl = src.startPageUrl
      ..status = src.status
      ..title = src.title;
  }

  void update(Map map) {
    this
      ..id = map['id']
      ..author = map['author']
      ..buildTimeSec = map['buildTimeSec']
      ..createdBy = map['createdBy']
      ..createdTime = DateTime.parse(map['createdTime'])
      ..currentPageNo = map['currentPageNo']
      ..currentPageUrl = map['currentPageUrl']
      ..epubCreated = map['epubCreated']
      ..errorMsg = map['errorMsg']
      ..lastUpdatedTime = DateTime.parse(map['lastUpdatedTime'])
      ..maxNumPages = map['maxNumPages']
      ..startPageUrl = map['startPageUrl']
      ..status = map['status']
      ..title = map['title'];
  }

  String toJson() {
    Map map = new Map()
      ..['id'] = this.id
      ..['author'] = this.author
      ..['buildTimeSec'] = this.buildTimeSec
      ..['createdBy'] = this.createdBy
      ..['createdTime'] = this.createdTime.toIso8601String()
      ..['currentPageNo'] = this.currentPageNo
      ..['currentPageUrl'] = this.currentPageUrl
      ..['epubCreated'] = this.epubCreated
      ..['errorMsg'] = this.errorMsg
      ..['lastUpdatedTime'] = this.lastUpdatedTime.toIso8601String()
      ..['maxNumPages'] = this.maxNumPages
      ..['startPageUrl'] = this.startPageUrl
      ..['status'] = this.status
      ..['title'] = this.title;
    return JSON.encode(map);
  }
}

class User extends Observable {
  @observable String name;
  @observable String password;
  @observable DateTime lastLoginTime = DateTime.parse('1970-01-01T01:01:00+00:00');
  @observable String sessionId = "";
  @observable String role = "";

  String toString() => "$name $sessionId";

  void copy(User src) {
    this
      ..name = src.name
      ..lastLoginTime = src.lastLoginTime
      ..role = src.role
      ..sessionId = src.sessionId;
  }

  void fromJson(String json) {
    Map map = JSON.decode(json);
    this
      ..name = map['name']
      ..password = map['password']
      ..role = map['role']
      ..sessionId = map['sessionId']
      ..lastLoginTime = DateTime.parse(map['lastLoginTime']);
  }

  String toJson() {
    Map map = new Map()
      ..['name'] = this.name
      ..['password'] = this.password
      ..['role'] = this.role
      ..['sessionId'] = this.sessionId
      ..['lastLoginTime'] = this.lastLoginTime.toIso8601String();
    return JSON.encode(map);
  }
}
