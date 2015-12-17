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
		self.sortRange = [
				{desc: "Book Title (A..Z)", name:"title", order:"asc"},
				{desc: "Book Title (Z..A)", name:"title", order:"dsc"},
				{desc: "Update Time (Oldest first)", name:"time", order:"asc"},
				{desc: "Update Time (Newest first)", name:"time", order:"dsc"},
				{desc: "Owner (A..Z)", name:"owner", order:"asc"},
				{desc: "Owner (Z..A)", name:"owner", order:"dsc"} ];
		self.sortBy = BookService.sortBy;
		if (!self.sortBy) {
			self.sortBy = self.sortRange[0];
		}

		self.sort = function() {
			if (self.sortBy) {
				BookService.sortBy = self.sortBy;
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

		self.processBooks = function(books) {
			self.books = [];
			for (var i=0; i<books.length; i++) {
				var book = books[i];
				if (book.status != "WORKING") {
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

		self.load = function() {
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
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

		// watch for reload button click
    $rootScope.$on('reload', function() {
    	if ($state.current.name == 'bookshelf') {
        self.load();
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
