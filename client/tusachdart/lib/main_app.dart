// Copyright (c) 2013, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

@HtmlImport('main_app.html')
library tusachdart.main_app;

import 'dart:html';
import 'dart:js';
import 'package:polymer/polymer.dart';
import 'package:route_hierarchical/client.dart';
import 'elements.dart';
import 'package:tusachdart/login_manager.dart';

/// Element representing the entire app. There should only be one of
/// these in existence.
@CustomTag('main-app')
class MainApp extends PolymerElement {
  @observable bool isLoggedIn = false;
  @observable LoginManager loginManager = new LoginManager();
  @observable int selectedIndex;
  @observable String username;
  @observable String password;

  /// The list of pages in our app.
  final List<String> pages = const ['bookShelves', 'createBook', 'About'];

  /// The [Router] which is going to control the app.
  //final Router router = new Router(useFragment: true);

  MainApp.created() : super.created();

  /// Convenience getters that return the expected types to avoid casts.
  CoreAnimatedPages get corePages => $['pages'];
  CoreMenu get menu => $['menu'];
  BodyElement get body => document.body;

  domReady() {
    print("main-app domready");
    // Set up the routes for all the pages.
    //for (var page in pages) {
    //router.root.addRoute(name: page, path: page, defaultRoute: false, enter: enterRoute);
    //}
    //router.listen();
  }
/*
  /// Updates [selectedPage] and the current route whenever the route changes.
  void routeChanged() {
    print("routeChanged: $selectedIndex");
    if (selectedIndex >= 0) {
      router.go(pages[selectedIndex], {});
    }
  }

  /// Updates [route] whenever we enter a new route.
  void enterRoute(RouteEvent e) {
    print("enterRoute: ${e.path}");
  }
*/
  void login() {}

  void userHasLogOn() {
    isLoggedIn = loginManager.isLoggedIn;
    print("userHasLogOn: $isLoggedIn");
  }

  void tabSelectHandler() {
    print("tabSelectHandler: $selectedIndex");
  }
}
