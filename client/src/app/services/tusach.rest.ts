import { Observable, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Timestamp from "google-protobuf/google/protobuf/timestamp_pb";
import { MessageService } from './message.service';
import * as model from '../../typings';
import { IBookListener } from './tusach.proxy'
import {timstamp2millis} from '../util/util';

export class TusachRest {
  private tusachUrl = '/api/tusach';
  private interval;
  private bookLastUpdatedTime : number;
  private detectChanges: boolean;
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private listener: IBookListener) {
    this.detectChanges = false;
    this.bookLastUpdatedTime = 0;
    this.interval = setInterval(() => {
      this.pollForChanges();
    }, 10000);
  }

  enableChangeDetection(enabled: boolean) : void {
    console.log("enableChangeDetection: " + enabled);
    this.detectChanges = enabled;
  }

  getTusachUrl() : string {
    return this.tusachUrl;
  }
  
  pollForChanges() {    
    if (this.detectChanges) {
      console.log("pollForChanges - t: " + String(this.bookLastUpdatedTime));
      this.doGetBooks(this.bookLastUpdatedTime).subscribe(bookList => {
        // get the latest time
        for (let book of bookList.getBooksList()) {
          let millis = timstamp2millis(book.getLastUpdatedTime());
          if (millis > this.bookLastUpdatedTime) {
            this.bookLastUpdatedTime = millis;
          }
        }
        this.log("bookLastUpdatedTime = " + new Date(this.bookLastUpdatedTime));
        this.listener.booksUpdated(bookList);
      });    
    } 
  }

  getBooks(): Observable<model.BookList> {    
    return this.doGetBooks(0);
  }

  doGetBooks(t: number): Observable<model.BookList> {    
    const url = this.tusachUrl + "/book/list/" + String(t);
    this.log("doGetBooks() - url:" + url);

    // convert to BookList
    return this.http.get(url).pipe(
      map(list => {
        console.log("doGetBooks() - received json books:");
        console.log(list);
        let bookList = model.toGrpcBookList(list);
        console.log("doGetBooks() - converted books:");
        console.log(bookList);
        return bookList;
      })
    );
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    const url = `${this.tusachUrl}/book/get/${id}`;
    this.log("getBook() - " + url);
    return this.http.get(url).pipe(
      map(book => model.toGrpcBook(book))
    );
  }

  updateBook(book: model.Book, cmd: string) : void {
    const url = this.tusachUrl + "/book/command/" + cmd;
    var jsonBook = model.toJsonBook(book);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    // need to set withCredentials to auto set cookie in request
    let options = { headers: headers, withCredentials: true };    
    this.log(url + " - " + JSON.stringify(jsonBook));
    this.http.post(url, jsonBook, options).subscribe(
      data => {
        this.log("updateBook() - " + cmd + " book successfully. " + data);
        this.listener.bookUpdateStatus(book, cmd, true, "");
      },
      err => {
        this.log("updateBook() - " + cmd + " book failed: " + JSON.stringify(err));
        // what type is this err!!!
        this.listener.bookUpdateStatus(book, cmd, false, err.status + " - " + err.statusText);
      }
    );
  }

  deleteBook(id: number): void {
    const url = this.tusachUrl + "/book/command/delete";
    this.log(url + " - " + id);
    let book = new model.Book();
    book.setId(id);

    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    // need to set withCredentials to auto set cookie in request
    let options = { headers: headers, withCredentials: true };    
    this.http.post(url, model.toJsonBook(book), options).subscribe(
      data => {this.log("deleteBook() - book deleted successfully. " + data)},
      error => {this.log("deleteBook() - book deleted error: " + error)}
    );
  }

  login(provider: string) : void {
    const url = "/api/login/" + provider;
    this.log(url);

    this.http.get(url).subscribe(
      data => {
        this.log("login() - redirect url: " + data)
        window.location.href = data["redirectUrl"];
      },
      error => {this.log("login() - login error: " + error)}
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachJson: ${message}`);
    console.log(message);
  }
}
