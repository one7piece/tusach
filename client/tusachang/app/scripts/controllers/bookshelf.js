'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('BookshelfCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', '$filter', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, $filter, BookService) {

		console.log("bookshelfCtrl creating...");
		var self = this;
		self.books = [];
		self.loading = false;
		self.statusMessage = "";
		self.statusType = "info";
		self.sortRange = BookService.cacheProps.sortRange;
		self.sortBy = BookService.cacheProps.sortBy;
		self.showOnlyMyBooks = BookService.cacheProps.showOnlyMyBooks;

		self.sort = function() {
			if (self.sortBy) {
				BookService.cacheProps.sortBy = self.sortBy;
				console.log("sort() - " + self.sortBy.desc);
				self.books.sort(function(a, b) {
					var val = 0;
					if (self.sortBy.name == "time") {
						if (a.lastUpdatedTime < b.lastUpdatedTime) {
							val = -1;
						} else if (a.lastUpdatedTime > b.lastUpdatedTime) {
							val = 1;
						}
						if (self.sortBy.order == "dsc") {
							val *= -1;
						}
					} else {
						if (self.sortBy.name == "title") {
							val = a.title.toLowerCase().localeCompare(b.title.toLowerCase());
						} else if (self.sortBy.name == "owner") {
							val = a.createdBy.toLowerCase().localeCompare(b.createdBy.toLowerCase());
						}
						if (val == 0) {
							// sort by time, newest first
							if (a.lastUpdatedTime < b.lastUpdatedTime) {
								val = 1;
							} else if (a.lastUpdatedTime > b.lastUpdatedTime) {
								val = -1;
							}
						} else if (self.sortBy.order == "dsc") {
							val *= -1;
						}
					}
					return val;
				});
			}
		};

		self.updateDisplay = function() {
			console.log("updateDisplay: showOnlyMyBooks:" + self.showOnlyMyBooks);
			if (self.showOnlyMyBooks != undefined) {
				BookService.cacheProps.showOnlyMyBooks = self.showOnlyMyBooks;
				self.processBooks(BookService.books);
			}
		}

		self.processBooks = function(books) {
			self.books = [];
			for (var i=0; i<books.length; i++) {
				var book = books[i];
				var display = (book.status != "WORKING") &&
					((self.showOnlyMyBooks == true && book.createdBy == $rootScope.logonUser.name) || self.showOnlyMyBooks == false);
				//console.log("display: " + display + ", " + book.title);
				if (display) {
					var pageStr = book.currentPageNo + "/" + book.maxNumPages;
					var dateStr = $filter('date')(new Date(book.lastUpdatedTime), 'dd-MM-yyyy HH:mm');
					book.titleSummary = book.title + "(" + pageStr + ")";
					self.books.push(book);
				}
			}
			self.statusType = "info";
			self.statusMessage = self.books.length + " books loaded";
			self.sort();
		}

		self.load = function(forceReload) {
			if (forceReload) {
				self.statusMessage = "Loading books from server...";
				self.loading = true;
				BookService.loadBooks(function(ok, value) {
					self.loading = false;
					if (ok) {
						self.processBooks(value);
					} else {
						self.statusMessage = "Error loading books: " + value;
						self.statusType = "error";
					}
				});
			} else {
				self.processBooks(BookService.books);
			}
		};

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

		self.canUpdate = function(book, operation) {
			//console.log("canUpdate: " + book.title + ", status:" + book.status
			//	+ ", isLogin:" + $rootScope.isLogin + ", role:" + $rootScope.logonUser.role);
			if (operation == "download") {
				return true;
			}
			if (book.status != 'WORKING' && $rootScope.isLogin &&
					($rootScope.logonUser.name == book.createdBy
					|| $rootScope.logonUser.role.indexOf("admin") != -1)) {
				return true;
			}
			return false;
		};

		self.update = function(book, operation) {
			$scope.loading = true;
			BookService.updateBook(book, operation, function(ok, value) {
				$scope.loading = false;
				if (ok) {
					self.statusMessage = "";
					if (operation == 'delete') {
						for (var i=0; i<self.books.length; i++) {
							if (book.id == self.books[i].id) {
								console.log("remove local cache of book index:" + i + ", " + book.title);
								self.books.splice(i, 1);
							}
						}
					}
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

		// watch for reload button click
    $rootScope.$on('reload', function() {
    	if ($state.current.name == 'bookshelf') {
        self.load(true);
    	}
    });

		BookService.subscribe($scope, function(event, data) {
			console.log("bookshelf: received BookService event: " + event);
			console.log(data);
			if (event == 'books') {
				self.processBooks(data);
			}
		});

		self.processBooks(BookService.books);
	}]);
