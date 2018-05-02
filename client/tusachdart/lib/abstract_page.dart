import 'package:polymer/polymer.dart';
import 'package:tusachdart/elements.dart';
import 'package:tusachdart/login_manager.dart';

abstract class AbstractPage extends PolymerElement {
  static String URL_PREFIX = "http://192.168.1.7:8888";
  //static String URL_PREFIX = "";
  LoginManager loginManager = new LoginManager();
  bool initialised = false;

  AbstractPage.created() : super.created() {}

  bool get isLoggedIn => loginManager.isLoggedIn;
  User get user => loginManager.user;

  void refreshPage() {
    initialised = true;
  }
  void viewActivate() {}

  @override
  void domReady() {
    super.domReady();
  }
}
