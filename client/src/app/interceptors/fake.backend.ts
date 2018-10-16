import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Long } from 'protobufjs';
import { CommonUtils, model } from '../common.utils';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  books: model.Book[];
  listRex: RegExp;
  getRex: RegExp;
  updateRex: RegExp;
  systemInfo : model.SystemInfo;

  constructor() { 
    this.systemInfo = new model.SystemInfo();
    this.listRex = new RegExp("/books/[0-9]+$");
    this.getRex = new RegExp("/book/[0-9]+$");
    this.updateRex = new RegExp("/book/[a-z]+$");
    let storedBooks = localStorage.getItem('books');
    if (storedBooks == null) {
      this.books = [
        this.createBook(1, "Tay Du Ky", "http://tayduky.com"),
        this.createBook(2, "Tam Quoc Chi", "http://tamquocchi.com"),
        this.createBook(3, "Tuy Duong", "http://tuyduong.com"),
        this.createBook(4, "Dong Chau Liet Quoc", "http://dongchaulietquoc.com"),
        this.createBook(5, "Hong Lau Mong", "http://honglaumong.com"),
        this.createBook(6, "Thuy Hu", "http://thuyhu.com"),
        this.createBook(7, "Than Dieu Dai Hiep", "http://thandieu.com"),
        this.createBook(8, "Y Thien Do Long Ky", "http://dolong.com"),
        this.createBook(9, "Than Dao Ho Dai Dom", "http://daidom.com")
      ];
      storedBooks = JSON.stringify(this.books);
      localStorage.setItem('books', storedBooks);
      console.log("intialised books: " + storedBooks);
    } else {
      this.books = JSON.parse(storedBooks);
      console.log("loaded " + this.books.length + " books from local storage");
    }
    this.systemInfo.bookLastUpdatedTime = Date.now();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      //console.log("intercept: " + request.method + " " + request.url);
      if (request.url.startsWith("/systemInfo")) {
        var now = Date.now();
        let bookLastUpdatedTime = <number>this.systemInfo.bookLastUpdatedTime;
        if (now - bookLastUpdatedTime >= 10*1000) {
          this.systemInfo.bookLastUpdatedTime = now;
          let bookIndex = Math.floor(Math.random() * this.books.length);
          this.books[bookIndex].lastUpdatedTime = now;
          this.books[bookIndex].currentPageNo = this.books[bookIndex].currentPageNo + 1;
          this.books[bookIndex].status = Math.floor(Math.random() * 4) + 1;      
          this.books[bookIndex].epubCreated = true;
          let storedBooks = JSON.stringify(this.books);
          localStorage.setItem('books', storedBooks);    
          console.log("update book: " + this.books[bookIndex].title + "/" + this.books[bookIndex].status);
        }
        return of(new HttpResponse({ status: 200, body: this.systemInfo }));        
      } else if (this.getRex.test(request.url)) {
        let urlParts = request.url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        var foundBook = null;
        for (let book of this.books) {
          if (book.id == id) {
            foundBook = book;
            break;
          }
        }
        if (foundBook != null) {
          return of(new HttpResponse({ status: 200, body: foundBook }));
        } else {
          return throwError({ error: { message: "Book " + id + " not found!" } });
        }
      } else if (this.listRex.test(request.url)) {
        let urlParts = request.url.split('/');
        let epochMS = Number(urlParts[urlParts.length - 1]);
        let list = new model.BookList();
        list.books = [];
        for (let book of this.books) {
          //console.log("parse book: " + book.title + ", lastUpdatedTime:" + <number>book.lastUpdatedTime); 
          if (epochMS == 0 || <number>book.lastUpdatedTime >= epochMS) {
            console.log("found updated book: " + book.title + " " 
              + CommonUtils.convertEpoche2Date(book.lastUpdatedTime).toLocaleString());
            list.books.push(book);
          }
        }
        list.isFullList = (this.books.length == list.books.length);
        return of(new HttpResponse({ status: 200, body: list }));
      } else if (this.updateRex.test(request.url) && request.method == 'POST') {
        let urlParts = request.url.split('/');
        let cmd = urlParts[urlParts.length - 1];
        console.log("'" + cmd + "' book");
      } else {
        console.log("Cannot find page: " + request.url);
        // else return 400 bad request
         return throwError({ error: { message: 'Page not found!' } });
      }

      // pass through any requests not handled above
      //return next.handle(request);
    }))

      // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }

  createBook(id: number, title: string, startPageURL: string) : model.Book {
    var book = new model.Book();
    book.id = id;
    book.title = title;
    book.startPageUrl = startPageURL;
    book.currentPageUrl = startPageURL;
    book.currentPageNo = Math.floor(Math.random() * 100);
    book.status = Math.floor(Math.random() * 4) + 1;
    book.lastUpdatedTime = Date.now();
    book.deleted = false;
    book.epubCreated = true;
    return book;
  }
}
