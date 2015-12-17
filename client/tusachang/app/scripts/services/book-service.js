'use strict';

/**
 * @ngdoc service
 * @name tusachangApp.NetworkService
 * @description
 * # NetworkService
 * Service in the tusachangApp.
 */
angular.module('tusachangApp')
  .service('BookService', ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout) {
    var self = this;

    // AngularJS will instantiate a singleton by calling "new" on this function
    self.sites = [];
    self.books = [];
    self.abortingBooks = [];
    // cache of sortBy
    self.cacheProps = {};
    self.cacheProps.sortRange = [
				{desc: "Book Title (A..Z)", name:"title", order:"asc"},
				{desc: "Book Title (Z..A)", name:"title", order:"dsc"},
				{desc: "Update Time (Oldest first)", name:"time", order:"asc"},
				{desc: "Update Time (Newest first)", name:"time", order:"dsc"},
				{desc: "Owner (A..Z)", name:"owner", order:"asc"},
				{desc: "Owner (Z..A)", name:"owner", order:"dsc"} ];
    self.cacheProps.sortBy = self.cacheProps.sortRange[3];
    self.cacheProps.showOnlyMyBooks = true; 

    // subscribe to books changes
    self.subscribe = function(scope, callback) {
      var handler = $rootScope.$on('bookService', function(event, data) {
        callback(data.name, data.data);
      });
      // clean up
      scope.$on('$destroy', handler);
    };
    self.notify = function(name, data) {
      $rootScope.$emit('bookService', {name: name, data: data});
    };

    self.loadSites = function(callback) {
      if (self.sites.length > 0) {
        callback(true, self.sites);
      }

      console.log("loading sites...");
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/sites', header)
        .success(function(data, status) {
          console.log("BookService.loadSites() - success response, status:" + status, data);
          if (status === 200 && data) {
            self.sites = data;
            if (callback) {
              callback(true, self.sites);
            }
          } else {
            if (callback) {
              callback(false, "Failed to load sites, status=" + status);
            }
          }
        })
        .error(function(data, status) {
          console.log("BookService.loadSites() - error response, status:" + status);
          if (callback) {
            callback(false, "Failed to load sites, status=" + status);
          }
        });
    };

    self.loadBooks = function(callback) {
      console.log("loading all books...");
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .then(function successCallback(response) {
          if (response.status == 200 && response.data) {
            self.books = response.data;
            if (callback) {
              callback(true, self.books);
            } else {
              // trigger event
              self.notify('books', self.books);
            }
          }
        }, function errorCallback(response) {
          if (callback) {
            callback(false, "Failed to load books, status=" + response.status);
          }
        });
    };

    self.loadBook = function(book, callback) {
      console.log("download book: " + book);
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .success(function(data, status) {
          console.log("BookService.loadBooks() - success response, status:" + status, data);
          if (status === 200 && data) {
            self.books = data;
            callback(true, self.books);
          } else {
            callback(false, "Failed to load books, status=" + status);
          }
        })
        .error(function(data, status) {
          console.log("BookService.loadBooks() - error response, status:" + status);
          callback(false, "Failed to load books, status=" + status);
        });
    };

    self.updateBook = function(book, operation, callback) {
      console.log(operation + " book: " + book);
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.post(urlPrefix + '/api/book/' + $rootScope.logonUser.sessionId + "/" + operation, book, header)
        .success(function(data, status) {
          console.log("BookService.updateBook() - success response, status:" + status, data);
          if (status === 200 && data) {
            if (operation == 'abort') {
              self.abortingBooks.push(book);
              // set timer to remove
              $timeout(function() {
                for (var i=0; i<self.abortingBooks.length; i++) {
                  if (self.abortingBooks[i].id == book.id) {
                    self.abortingBooks.splice(i, 1);
                    break;
                  }
                }
              }, 20*1000);
            }
            callback(true, data);
          } else {
            callback(false, "Failed to " + operation + " book, status=" + status);
          }
        })
        .error(function(data, status) {
          console.log("BookService.updateBook() - error response, status:" + status, data);
          callback(false, "Failed to " + operation + " book, status=" + status);
        });
    };

    self.refreshInterval = 10*1000;
    self.systemInfo = {};
    self.loadSystemInfo = function() {
      //console.log("loading system info...");
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/systeminfo', header)
        .success(function(data, status) {
          //console.log("BookService.loadSystemInfo() - success response, status:" + status, data);
          if (status === 200 && data) {
            // schedule book reload
            var reloadBooks = (self.systemInfo.bookLastUpdateTime != data.bookLastUpdateTime);
            self.systemInfo = data;
            if (reloadBooks) {
              self.loadBooks(null);
            }
          } else {
            console.log("Failed to load systemInfo, status=" + status);
          }
          $timeout(self.loadSystemInfo, self.refreshInterval);
        })
        .error(function(data, status) {
          console.log("Failed to load systemInfo, status=" + status);
          $timeout(self.loadSystemInfo, self.refreshInterval);
        });
    };

    self.loadSystemInfo();
    // refresh every 10secs
    $timeout(self.loadSystemInfo, self.refreshInterval);

  }]);
