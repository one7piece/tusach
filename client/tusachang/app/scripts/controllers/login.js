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
    $scope.rebooting = ($stateParams.rebooting === true);

    // if rebooting, create timer to check when rebooting is completed
    if ($scope.rebooting) {
      $scope.monitorTimer = $interval(function() {
        console.log("validating session with server...");
        LoginService.doValidateSession(function(ok, status) {
          if (status == 200 || status == 401) {
      		  self.stopTimer();
          }
        });
      }, 10000);
    }

		$scope.$on('$destroy', function() {
		  self.stopTimer();
		});


    $scope.doLogin = function() {
	    $scope.statusType = "info";
	    $scope.statusMessage = "Authenticating with server...";
      LoginService.doLogin($scope.username, $scope.password, function(ok, errorMessage) {
				$scope.statusType = ($rootScope.isLogin ? "info" : "error");
		    $scope.statusMessage = errorMessage;				
			});			
    };

    self.stopTimer = function() {
      $scope.rebooting = false;
		  if ($scope.monitorTimer) {
        $interval.cancel($scope.monitorTimer);
        $scope.monitorTimer = null;
		  }
    };

  }]);
