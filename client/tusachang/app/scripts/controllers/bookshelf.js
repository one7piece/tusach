'use strict';

/**
 * @ngdoc function
 * @name pcpguiApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the pcpguiApp
 */
angular.module('tusachangApp')
	.controller('BookshelfCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, BookService) {

		var self = this;
		self.books = [];
		self.loading = false;

		self.load = function() {
			self.loading = true;
			BookService.loadBooks(function(ok, value) {
				self.loading = false;
				self.books = value;
				for (var i=0; i<self.books.length; i++) {
					self.books[i].titleSummary = self.books[i].title + " ("
						+ self.books[i].currentPageNo + "/" + self.books[i].maxNumPages + ")";
				}
			});
		};
		self.load();

		self.select = function(book) {
			console.log("select book: ", book);
			$scope.book = book;
			$mdBottomSheet.show({
				templateUrl: 'views/bookdetail.html',
				controller: 'BookDetailCtrl',
				scope: $scope
			});
			console.log("book selected: ", book);
		};

    $rootScope.$on('reload', function() {
    	if ($state.current.name == 'bookshelf') {
        self.load();
    	}
    });

	}]);
