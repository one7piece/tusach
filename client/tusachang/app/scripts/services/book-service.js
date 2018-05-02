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
    self.cacheProps.showOnlyMyBooks = false;

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
        .then(function success(response) {
          console.log("BookService.loadSites() - success response:", response);
          if (response.status === 200 && response.data) {
            self.sites = response.data;
            if (callback) {
              callback(true, self.sites);
            }
          } else {
            if (callback) {
              callback(false, "Failed to load sites, status=" + response.status);
            }
          }
        })
        .catch(function error(response) {
          console.log("BookService.loadSites() - error response:", response);
          if (callback) {
            callback(false, "Failed to load sites, status=" + response.status);
          }
        });
    };

    self.loadBooks = function(callback) {
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .then(function success(response) {
          console.log("loaded all books: ", response.data);
          if (response.status == 200 && response.data) {
            self.books = response.data;
            if (callback) {
              callback(true, self.books);
            } else {
              // trigger event
              self.notify('books', self.books);
            }
          }
        })
        .catch(function error(response) {
          if (callback) {
            callback(false, "Failed to load books, status=" + response.status);
          }
        });
    };

    self.loadBook = function(book, callback) {
      console.log("download book: " + book);
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .then(function(response) {
          console.log("BookService.loadBooks() - success response:", response);
          if (response.status === 200 && response.data) {
            self.books = response.data;
            callback(true, self.books);
          } else {
            callback(false, "Failed to load books, status=" + response.status);
          }
        })
        .catch(function error(response) {
          console.log("BookService.loadBooks() - error response, status:" + response.status);
          callback(false, "Failed to " + operation + " book, error=" + response.data + "(" + response.status + ")");
        });
    };

    self.updateBook = function(book, operation, callback) {
      console.log(operation + " book: " + book);
      //var header = {headers: {'Content-Type': 'application/json'}};
      $http.post(urlPrefix + '/api/book/' + operation, book)
        .then(function success(response) {
          console.log("BookService.updateBook() - success response:", response);
          if (response.status === 200 && response.data) {
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
            callback(true, response.data);
          } else {
            callback(false, "Failed to " + operation + " book, error=" + response.data + "(" + response.status + ")");
          }
        })
        .catch(function error(response) {
          console.log("BookService.updateBook() - error response:", response);
          callback(false, "Failed to " + operation + " book, status=" + response.status);
        });
    };

    self.refreshInterval = 10*1000;
    self.systemInfo = {};
    self.loadSystemInfo = function() {
      //console.log("loading system info...");
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/systeminfo', header)
        .then(function success(response) {
          //console.log("BookService.loadSystemInfo() - success response:", response);
          if (response.status === 200 && response.data) {
            // schedule book reload
            var reloadBooks = (self.systemInfo.bookLastUpdateTime != response.data.bookLastUpdateTime);
            self.systemInfo = response.data;
            if (reloadBooks) {
              console.log("bookLastUpdateTime has changed to: " + response.data.bookLastUpdateTime);
              self.loadBooks(null);
            }
          } else {
            console.log("Failed to load systemInfo, status=" + response.status);
          }
          $timeout(self.loadSystemInfo, self.refreshInterval);
        })
        .catch(function error(response) {
          console.log("error load systemInfo: ", response);
          $timeout(self.loadSystemInfo, self.refreshInterval);
        });
    };

    self.loadSystemInfo();
    // refresh every 10secs
    $timeout(self.loadSystemInfo, self.refreshInterval);

  }]);
