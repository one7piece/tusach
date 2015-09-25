'use strict';

/**
 * @ngdoc service
 * @name pcpguiApp.NetworkService
 * @description
 * # NetworkService
 * Service in the pcpguiApp.
 */
angular.module('tusachangApp')
  .service('BookService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;

    // AngularJS will instantiate a singleton by calling "new" on this function

    self.loadBooks = function(callback) {
      console.log("loading all books...");
      var header = {headers: {'Content-Type': 'application/json'}};
      $http.get(urlPrefix + '/api/books/0', header)
        .success(function(data, status) {
          console.log("BookService.loadBooks() - success response, status:" + status, data);
          if (status === 200 && data) {
            self.books = data;
            callback(true, data);
          } else {
            callback(false, "Failed to load books, status=" + status);
          }
        })
        .error(function(data, status) {
          console.log("BookService.loadBooks() - error response, status:" + status);
          callback(false, "Failed to load books, status=" + status);
        });
    };
/*
    self.books = [
      {
        id: 1,
        title: "Bat Bai Chien Than",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 2,
        title: "Tap Do",
        author: "Phuong Tuong",
        createTime: "",
        status: "COMPLETED",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 3,
        title: "The Gioi Tu Chan",
        author: "Phuong Tuong",
        createTime: "",
        status: "ERROR",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 4,
        title: "Bat Tu",
        author: "Phuong Tuong",
        createTime: "",
        status: "COMPLETED",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 5,
        title: "Truong Tam Phong",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 6,
        title: "Cuu Thien Tinh Than Quyet",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 1,
        title: "Bat Bai Chien Than",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 2,
        title: "Tap Do",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 3,
        title: "The Gioi Tu Chan",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 4,
        title: "Bat Tu",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 5,
        title: "Truong Tam Phong",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      },
      {
        id: 6,
        title: "Cuu Thien Tinh Than Quyet",
        author: "Phuong Tuong",
        createTime: "",
        status: "WORKING",
        currentPageNo: 10,
        maxNumPages: 100,
        lastUpdateTime: "",
        epubCreated: true
      }
    ];
*/
  }]);
