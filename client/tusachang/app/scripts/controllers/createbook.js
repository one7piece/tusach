'use strict';

/**
 * @ngdoc function
 * @name tusachangApp.controller:CreateBookCtrl
 * @description
 * # SummaryCtrl
 * Controller of the tusachangApp
 */
angular.module('tusachangApp')
	.controller('CreateBookCtrl', ['$rootScope', '$state', '$scope', '$mdBottomSheet', 'BookService',
			function ($rootScope, $state, $scope, $mdBottomSheet, BookService) {

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
				if (!ok) {
					self.statusMessage = "";
				} else {
					self.statusMessage = value;
					self.statusType = "error";
				}
			});
		};

		self.abort = function(book) {
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
				self.books = [];
				for (var i=0; i<value.length; i++) {
					if (value.status == 'WORKING') {
						self.books.push(value[i]);
						value[i].details = value[i].status + " ("
							+ value[i].currentPageNo + "/" + value[i].maxNumPages + ")";
					}
				}
			});
		};
		self.load();

	}]);
