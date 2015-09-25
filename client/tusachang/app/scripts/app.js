'use strict';

var urlPrefix = 'http://110.175.4.240';

/**
 * @ngdoc overview
 * @name tusachangApp
 * @description
 * # tusachangApp
 *
 * Main module of the application.
 */
angular
  .module('tusachangApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
		'ui.router'
  ])
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }])
  .config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$stateProvider', '$httpProvider',
      function ($mdThemingProvider, $mdIconProvider, $routeProvider, $stateProvider, $httpProvider) {

    $mdIconProvider
      .icon("person"       , "./images/person.svg")
      .icon("login"       , "./images/logout.svg")
      .icon("refresh"       , "./images/refresh.svg")

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');

    $stateProvider
      .state('bookshelf', {
				url: '/bookshelf',
        templateUrl: 'views/bookshelf.html',
        controller: 'BookshelfCtrl as bookshelf'
      })
      .state('createBook', {
				url: '/createBook',
        templateUrl: 'create-book.html',
        controller: 'CreateBookCtrl as creator'
      });
  }]);



