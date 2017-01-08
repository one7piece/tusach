'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('BookDetailCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'LoginService', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, LoginService, BookService) {

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
			var logonUser = LoginService.getLogonUser();
			if (book.status != 'WORKING' && LoginService.isLogin &&
					(logonUser.name == $scope.book.createdBy || logonUser.role == "admin")) {
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
