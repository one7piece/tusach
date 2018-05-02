// Copyright (c) 2013, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

@HtmlImport('main_app.html')
library tusachdart.main_app;

import 'dart:html';
import 'dart:js';
import 'package:polymer/polymer.dart';
import 'package:route_hierarchical/client.dart';
import 'dart:convert';
import 'elements.dart';
import 'package:tusachdart/login_manager.dart';
import 'package:tusachdart/abstract_page.dart';
import 'package:tusachdart/bookshelves_list.dart';

/// Element representing the entire app. There should only be one of
/// these in existence.
@CustomTag('main-app')
class MainApp extends PolymerElement {
  @observable bool isLoggedIn = false;
  @observable LoginManager loginManager = new LoginManager();
  @observable int selectedIndex;
  @observable String username;
  @observable String password;
  @observable String errorMessage;

  /// The list of pages in our app.
  final List<String> pages = const ['bookShelves', 'createBook', 'About'];

  /// The [Router] which is going to control the app.
  //final Router router = new Router(useFragment: true);

  MainApp.created() : super.created();

  /// Convenience getters that return the expected types to avoid casts.
  CoreAnimatedPages get corePages => $['pages'];
  CoreMenu get menu => $['menu'];
  BodyElement get body => document.body;
  CoreList get bookList => document.querySelector('* /deep/ #bookList');

  domReady() {
    print("main-app domready");
    shadowRoot.querySelector('core-header-panel').onKeyUp.listen((e) {
      if (e.keyCode == KeyCode.ENTER) {
        loginHandler(e);
      }
    });
    bookList.updateSize(); // required for core-list-dart
  }

  void loginHandler(Event e) {
    print("loginHandler - username: $username, password:$password");
    if (username == null || username.isEmpty || password == null || password.isEmpty) {
      errorMessage = "User name or password cannot be empty";
      return;
    }
    errorMessage = "";
    loginManager.login(username, password);
  }

  void userHasLogOn() {
    isLoggedIn = loginManager.isLoggedIn;
    print("userHasLogOn: $isLoggedIn");
  }

  void tabSelectHandler() {
    print("tabSelectHandler: $selectedIndex");
    bookList.updateSize(); // required for core-list-dart
  }
}
