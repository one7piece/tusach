'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('BookDetailCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, BookService) {

		var self = this;
		
		$scope.loading = false;
		$scope.statusMessage = "";
		$scope.statusType = "info";		
		$scope.book = $rootScope.selectedBook;
		
		console.log("book detail: " + $scope.book);
		$scope.book.statusSummary = $scope.book.status;
		if ($scope.book.status == "ERROR") {
		 	$scope.book.statusSummary += " (" + $scope.book.errorMsg + ")";
		}

		$scope.download = function() {
			window.location = urlPrefix + "/downloadBook/" + $scope.book.title + ".epub?bookId=" + $scope.book.id;
		};

		$scope.canUpdate = function(operation) {
			if (operation == "download") {
				return true;
			}			
			if (book.status != 'WORKING' && $rootScope.isLogin && 
					($rootScope.logonUser.name == $scope.book.createdBy 
					|| $rootScope.logonUser.role.indexOf("admin") != -1)) {
				return true;
			}
			return false;
		};
		
		$scope.update = function(operation) {
			$scope.loading = true;
			BookService.updateBook($scope.book, operation, function(ok, value) {
				$scope.loading = false;
				if (!ok) {
					self.statusMessage = "";
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

	}]);
