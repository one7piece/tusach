library tusachdart.login_manager;

import 'package:polymer/polymer.dart';
import 'package:tusachdart/elements.dart';
import 'package:tusachdart/abstract_page.dart';
import 'package:tusachdart/model.dart';
import 'dart:convert';

class LoginManager {
  static final LoginManager _instance = new LoginManager._internal();
  User user = new User();

  factory LoginManager() {
    return _instance;
  }
  LoginManager._internal();

  void login(String username, String password) {
    var httpRequest = new HttpRequest();
    String url = AbstractPage.URL_PREFIX + "/api/login";
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    //httpRequest.onError.first.then((e) => print("error: $e"));
    httpRequest.onLoadEnd.listen((e) => requestComplete(httpRequest));
    user.name = "";
    user.sessionId = "";
    Map m = new Map()
      ..["username"] = username
      ..["password"] = password;
    String payload = JSON.encode(m);
    httpRequest.send(payload);
  }

  void logout() {
    var httpRequest = new HttpRequest();
    String url = AbstractPage.URL_PREFIX + "/api/logout/${user.sessionId}";
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    //httpRequest.onLoadEnd.listen((e) => requestComplete(httpRequest));
    user.name = "";
    user.sessionId = "";
    httpRequest.send();
  }

  void requestComplete(HttpRequest httpRequest) {
    int status = httpRequest.status;
    String json = httpRequest.responseText;
    String statusText = httpRequest.statusText;
    print("status: $statusText($status), json response: $json");
    if (status == 200) {
      user.fromJson(json);
    }
    // bug in Dart, event can only be lower case
    //dispatchEvent(new CustomEvent('userhaslogon'));
  }

  @observable bool get isLoggedIn => user.sessionId != "";
}
