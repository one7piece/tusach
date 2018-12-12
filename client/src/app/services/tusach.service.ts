import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModuleWithComponentFactories } from '@angular/compiler/src/jit/compiler';
import { MessageService } from './message.service';
import { CommonUtils, model, google, Long } from '../common.utils';

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
  private tusachUrl = '/api/tusach';
  private listeners : IBookListener[] = [];
  private interval;
  private bookLastUpdatedTime : number = 0;
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService) {

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
    const url = this.tusachUrl + "/book/list/" + String(this.bookLastUpdatedTime);
    this.http.get<model.BookList>(url).subscribe(bookList => {
      if (bookList && bookList.books) {
        this.log("number of updated books: " + bookList.books.length + ", isFullList: " + bookList.isFullList);
        // get the latest time
        for (let book of bookList.books) {
          if (CommonUtils.convertTimestamp2Epoch(book.lastUpdatedTime) > this.bookLastUpdatedTime) {
            this.bookLastUpdatedTime = CommonUtils.convertTimestamp2Epoch(book.lastUpdatedTime);
            this.log("bookLastUpdatedTime=" + String(this.bookLastUpdatedTime) + "," + CommonUtils.convertEpoch2Date(this.bookLastUpdatedTime));
          }
        }
        for (var i=0; i<this.listeners.length; i++) {
          this.listeners[i].booksUpdated(bookList);
        }
        }
    });
  }

  getBooks(): Observable<model.BookList> {
    const url = this.tusachUrl + "/book/list/0";
    this.log("getBooks() - " + url);
    return this.http.get<model.BookList>(url);
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    const url = `${this.tusachUrl}/book/get/${id}`;
    this.log("getBook() - " + url);
    return this.http.get<model.Book>(url);
  }

  updateBook(book: model.Book, cmd: string) : void {
    const url = this.tusachUrl + "/book/command/" + cmd;
    this.log(url + " - " + JSON.stringify(book));
    this.http.post(url, book).subscribe(
      data => {this.log("updateBook() - " + cmd + " book successfully. " + data)},
      error => {this.log("updateBook() - " + cmd + " book failed: " + error)}
    );
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
