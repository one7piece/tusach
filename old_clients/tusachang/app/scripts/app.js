'use strict';

//var urlPrefix = 'http://110.175.4.240';
var urlPrefix =  '';

var showAlert = function($mdDialog, title, message) {
  $mdDialog.show(
       $mdDialog.alert()
         .parent(angular.element(document.querySelector('#popupContainer')))
         .clickOutsideToClose(true)
         .title(title)
         .textContent(message)
         .ariaLabel('Alert Dialog')
         .ok('OK')
     );
};

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
		'ui.router',
    "base64",
    'matchmedia-ng'
  ])
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }])
  .config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$stateProvider', '$httpProvider',
      function ($mdThemingProvider, $mdIconProvider, $routeProvider, $stateProvider, $httpProvider) {

    $mdIconProvider
    	.iconSet('core', './images/core-icons.svg', 24)
      .icon("person"       , "./images/person.svg")
      .icon("login"       , "./images/logout.svg")

    $mdThemingProvider.theme('default')
      .primaryPalette('blue');

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
      })
      .state('administration', {
				url: '/administration',
        templateUrl: 'views/administration.html',
        controller: 'AdministrationCtrl as administration'
      });
      
      $httpProvider.interceptors.push('myHttpRequestInterceptor');
      $httpProvider.interceptors.push('myHttpResponseInterceptor');
  }]);

angular.module('tusachangApp').factory('myHttpRequestInterceptor', ['$injector', function($injector) {
  return {
    'request': function(config) {
      //console.log("inject auth header...")
      config.headers['Content-Type'] = "application/json";
      var LoginService = $injector.get('LoginService');
      if (LoginService.isLogin && !config.headers['Authorization']) {
        config.headers['Authorization'] = LoginService.session.Token;
      }
      return config;
    }
  };
}]);

angular.module('tusachangApp').factory('myHttpResponseInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
  return {
    'responseError': function(response) {
      if (response.status == 401 || response.status == 403) {
        $rootScope.$emit('authentication', 'sessionExpired');
      }
      return $q.reject(response);
    }
  };
}]);