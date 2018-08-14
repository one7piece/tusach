'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$stateParams', '$interval', 'LoginService',
      function ($rootScope, $scope, $stateParams, $interval, LoginService) {

    var self = this;

    console.log("LoginCtrl ...");
    $scope.username = "";
    $scope.password = "";
    $scope.statusMessage = $stateParams.message;
    $scope.statusType = ($scope.statusMessage != "" ? "error" : "info");

    $scope.doLogin = function() {
	    $scope.statusType = "info";
	    $scope.statusMessage = "Authenticating with server...";
      LoginService.doLogin($scope.username, $scope.password, function(ok, errorMessage) {
				$scope.statusType = (LoginService.isLogin ? "info" : "error");
		    $scope.statusMessage = errorMessage;
			});
    };

  }]);
