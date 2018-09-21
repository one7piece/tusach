import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { model } from '../../typings';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  books: model.Book[];

  constructor() { 
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
      console.log("loaded books from local storage: " + storedBooks);
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     console.log("intercept: " + request.url);

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      if (request.url.match("/\/books\/\d*$/")) {
        var id = 0;
        if (request.url.match("/\/books\/\d+$/")) {
          let urlParts = request.url.split('/');
          id = parseInt(urlParts[urlParts.length - 1]);
        }
        let list: model.Book[] = [];
        for (let book of this.books) {
          if (id == 0 || book.id == id) {
            list.push(book);
          }
        }
        return of(new HttpResponse({ status: 200, body: JSON.stringify(list) }));
      } else if (request.url.match("/\/book\/\s+$/") && request.method == 'POST') {
      } else {
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
    return book;
  }
}
