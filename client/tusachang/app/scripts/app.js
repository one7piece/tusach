'use strict';

var urlPrefix = 'http://110.175.4.240';
//var urlPrefix =  '';

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
        templateUrl: 'views/createbook.html',
        controller: 'CreateBookCtrl as creator'
      });
  }]);

angular.module('tusachangApp').factory('myHttpResponseInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
  return {
    'responseError': function(response) {
      if (response.status == 401) {
        $rootScope.$emit('authentication', 'sessionExpired');
      }
      return $q.reject(response);
    }
  };
}]);

