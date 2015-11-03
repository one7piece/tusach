'use strict';

/**
 * @ngdoc service
 * @name tusachangApp.NetworkService
 * @description
 * # NetworkService
 * Service in the tusachangApp.
 */
angular.module('tusachangApp')
  .service('BookService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;
       
    // AngularJS will instantiate a singleton by calling "new" on this function
    self.sites = [];
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
        .success(function(data, status) {
          console.log("BookService.loadBooks() - success response, status:" + status, data);
          if (status === 200 && data) {
            self.books = data;
            // sort book by last update time desc
            self.books.sort(function(a, b) {
              if (a.lastUpdatedTime > b.lastUpdatedTime) {
                return -1
              } else if (a.lastUpdatedTime < b.lastUpdatedTime) {
                return 1;
              }
              return 0;
            });
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

    self.loadBook = function(book, callback) {
      console.log("download book: " + book);
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .success(function(data, status) {
          console.log("BookService.loadBooks() - success response, status:" + status, data);
          if (status === 200 && data) {
            self.books = data;
            // sort book by last update time desc
            self.books.sort(function(a, b) {
              if (a.lastUpdatedTime > b.lastUpdatedTime) {
                return -1
              } else if (a.lastUpdatedTime < b.lastUpdatedTime) {
                return 1;
              }
              return 0;
            });
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
      $http.post(urlPrefix + '/api/book/' + operation, book, header)
        .success(function(data, status) {
          console.log("BookService.updateBook() - success response, status:" + status, data);
          if (status === 200 && data) {
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
    
  }]);
