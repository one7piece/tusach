'use strict';

/**
 * @ngdoc function
 * @name pcpguiApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the pcpguiApp
 */
angular.module('tusachangApp')
	.controller('BookDetailCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, BookService) {

		var self = this;

		console.log("book detail: " + $scope.book);
		$scope.book.statusSummary = $scope.book.status;
		if ($scope.book.status == "ERROR") {
		 	$scope.book.statusSummary += " (" + $scope.book.errorMsg + ")";
		}

		$scope.download = function() {
		};

		$scope.delete = function() {
		};

		$scope.resume = function() {
		};

	}]);
