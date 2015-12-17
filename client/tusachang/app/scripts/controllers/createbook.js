'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:CreateBookCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('CreateBookCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', '$interval', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, $interval, BookService) {

		var self = this;
		self.loading = false;
		self.sites = [];
		self.books = [];
		self.firstChapterURL = "";
		self.title = "";
		self.author = "";
		self.numPages = 0;
		self.statusMessage = "";
		self.statusType = "info";

		self.create = function() {
			self.statusMessage = "Creating book...";
			self.statusType = "info";
			var newBook = {startPageUrl: self.firstChapterURL, title: self.title, author: self.author, maxNumPages: self.numPages};
			BookService.updateBook(newBook, "create", function(ok, value) {
				if (ok) {
					self.statusMessage = "";
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

		self.canAbort = function(book) {
			for (var i=0; i<BookService.abortingBooks.length; i++) {
				if (BookService.abortingBooks[i].id == book.id) {
					return false;
				}
			}
			return true;
		};

		self.abort = function(book) {
			BookService.updateBook(book, "abort", function(ok, value) {
				if (ok) {
					self.statusMessage = "";
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

		self.processBooks = function(books) {
			self.books = [];
			for (var i=0; i<books.length; i++) {
				if (books[i].status == 'WORKING') {
					self.books.push(books[i]);
					books[i].details = books[i].status + " (" +
						books[i].currentPageNo + "/" + books[i].maxNumPages + ")";
				}
			}
		};

		self.load = function() {
			self.loading = true;
			BookService.loadSites(function(ok, value) {
				if (ok) {
					self.sites = value;
				} else {
				}
			});

			BookService.loadBooks(function(ok, value) {
				self.loading = false;
				if (ok) {
					self.processBooks(value);
				} else {
					self.books = [];
				}
			});
		};

		BookService.subscribe($scope, function(event, data) {
			console.log("createbook: received BookService event: " + event);
			console.log(data);
			if (event == 'books') {
				self.processBooks(data);
			}
		});

		//self.processBooks(BookService.books);
		self.load();
	}]);
