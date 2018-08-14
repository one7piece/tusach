'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
  .controller('MainCtrl', ['$rootScope', '$state', '$scope', 'LoginService',
      function ($rootScope, $state, $scope, LoginService) {

    var self = this;
    self.username = "";
    self.password = "";

    var isMobile = {
      Android: function() { return navigator.userAgent.match(/Android/i); },
      BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
      iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
      Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
      Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
      any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };

    console.log("isMobile: " + isMobile.any());
    self.desktopMode = (isMobile.any != true);
    $rootScope.desktopMode = self.desktopMode;
    $state.go("bookshelf");

    // for controller As syntax
    $scope.$watch(function(value) {
      return self.desktopMode;
    }, function(value) {
      console.log("desktopMode changed, newValue: " + self.desktopMode);
      $rootScope.desktopMode = self.desktopMode;
    });

    // listen for login/logout events
    $rootScope.$on('authentication', function(event, type) {
      console.log("received event: " + event + ", type:" + type);
      var errorMessage = "";
      if (type == 'sessionExpired') {
        errorMessage = "Your session has expired!";
      }

      if (LoginService.isLogin != true) {
        if ($state.current.name != 'bookshelf') {
          //$state.go('bookshelf', {'message':errorMessage});
        }
			}

    });

    self.signInOut = function() {
      if (LoginService.isLogin != true) {
        console.log("sign in with " + self.username + "/" + self.password);
        LoginService.doLogin(self.username, self.password);
      } else {
        LoginService.doLogout();
      }
    };

    self.isLogin = function() {
      return LoginService.isLogin;
    };

    self.logonUser = function() {
      return LoginService.getLogonUser();
    }
  }]);
