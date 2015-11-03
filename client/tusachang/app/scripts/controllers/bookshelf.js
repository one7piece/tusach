'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('BookshelfCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, BookService) {

		var self = this;
		self.books = [];
		self.loading = false;
		self.statusMessage = "";
		self.statusType = "info";

		self.load = function() {
			self.statusMessage = "Loading books from server...";
			self.loading = true;
			BookService.loadBooks(function(ok, value) {
				self.loading = false;
				if (ok) {
					self.books = value;
					for (var i=0; i<self.books.length; i++) {
						self.books[i].titleSummary = self.books[i].title + " ("
							+ self.books[i].currentPageNo + "/" + self.books[i].maxNumPages + ")";
					}
					self.statusMessage = self.books.length + " books loaded";
				} else {
					self.statusMessage = "Error loading books: " + value;
					self.statusType = "error";
				}
			});
		};
		self.load();

		self.select = function(book) {
			console.log("select book: ", book);
			if ($rootScope.desktopMode) {
				$rootScope.selectedBook = book;				
				$mdBottomSheet.show({
					templateUrl: 'views/bookdetail.html',
					controller: 'BookDetailCtrl'
				});
			} else {
				// download book
			}
		};

		self.getDownloadLink = function(book) {
			return urlPrefix + "/downloadBook/" + book.title + ".epub?bookId=" + book.id;
		};

    $rootScope.$on('reload', function() {
    	if ($state.current.name == 'bookshelf') {
        self.load();
    	}
    });

	}]);
