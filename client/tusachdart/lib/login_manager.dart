library tusachdart.login_manager;

import 'package:polymer/polymer.dart';

class User extends Object with Observable {
  @observable String username = "";
  @observable String sessionId = "";
}

class LoginManager {
  static final LoginManager _instance = new LoginManager._internal();
  User user = new User();

  factory LoginManager() {
    return _instance;
  }
  LoginManager._internal();

  void login(String username, String sessionId) {
    user.username = (username != null ? username : "");
    user.sessionId = (sessionId != null ? sessionId : "");
  }

  void logout() {
    user.username = "";
    user.sessionId = "";
  }

  @observable bool get isLoggedIn => user.sessionId != "";
}
