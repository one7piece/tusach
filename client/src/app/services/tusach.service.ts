import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModuleWithComponentFactories } from '@angular/compiler/src/jit/compiler';
import { util } from 'protobufjs';
import { model } from '../../typings';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface IBookListener {
  booksUpdated(list: model.BookList);
}

@Injectable({
  providedIn: 'root'
})

export class TusachService {
  private tusachUrl = '/tusach/';
  private listeners : IBookListener[] = [];
  private interval;
  private systemInfo : model.SystemInfo;
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService) {

    this.systemInfo = new model.SystemInfo();
    this.interval = setInterval(() => {
      if (this.listeners.length > 0) {
        this.pollForChanges();
      }
    }, 3000);
  }

  subscribe(l: IBookListener): void {
    if (this.listeners.indexOf(l) == -1) {
      this.log("add subscriber: " + l);
      this.listeners.push(l);
    } else {
      this.log("subscribe - ignore duplicate subscription!");
    }
  }

  unsubscribe(l: IBookListener): void {
    const index = this.listeners.indexOf(l);
    if (index != -1) {
      this.listeners.splice(index, 1);
      this.log("remove subscriber: " + l);
    } else {
      this.log("unsubscribe - cannot find listener: " + l);
    }
  }
  
  pollForChanges() {
    const url = this.tusachUrl + "systemInfo/";
    let info = this.http.get<model.SystemInfo>(url);
    info.subscribe(info => {
      //this.log("systemInf bookLastUpdatedTime:" + new Date(<number>info.bookLastUpdatedTime).toLocaleString());
      if (<number>this.systemInfo.bookLastUpdatedTime == 0) {
        this.systemInfo.bookLastUpdatedTime = info.bookLastUpdatedTime;
      } else if (<number>info.bookLastUpdatedTime != <number>this.systemInfo.bookLastUpdatedTime) {
        this.systemInfo.bookLastUpdatedTime = info.bookLastUpdatedTime;
        // call server to load the changed books
        //this.log("system last update time changed: " 
        //  + new Date(<number>info.bookLastUpdatedTime).toLocaleString());
        const url = this.tusachUrl + "books/" + String(this.systemInfo.bookLastUpdatedTime);
        //this.log("getBooks() - " + url);
        this.http.get<model.BookList>(url).subscribe(bookList => {
          this.log("number of updated books: " + bookList.books.length + ", isFullList: " + bookList.isFullList);
          for (var i=0; i<this.listeners.length; i++) {
            this.listeners[i].booksUpdated(bookList);
          }
        });
      }
    });
  }

  getBooks(): Observable<model.BookList> {
    const url = this.tusachUrl + "books/0";
    this.log("getBooks() - " + url);
    return this.http.get<model.BookList>(url);
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    const url = `${this.tusachUrl}book/${id}`;
    this.log("getBook() - " + url);
    return this.http.get<model.Book>(url);
  }

  createBook(book: model.Book) : void {
    const url = this.tusachUrl + "books";
    this.log("createBook() - " + url + " - " + JSON.stringify(book));
    this.http.post<model.Book>(url, book);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error) {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
      } else {
        this.log(`${operation} failed!`);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachService: ${message}`);
    console.log(message);
  }
}
