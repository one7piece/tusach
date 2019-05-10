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
  private bookListAdapter = new model.JsonBookListAdapter();
  
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
    this.detectChanges = enabled;
  }

  getTusachUrl() : string {
    return this.tusachUrl;
  }
  
  pollForChanges() {
/*    
    if (this.detectChanges) {
      let url = this.tusachUrl + "/book/list/" + String(this.bookLastUpdatedTime);

      this.http.get<model.BookListObject>(url).subscribe(bookListObj => {
        if (bookListObj && bookListObj.books) {
          this.log("number of updated books: " + bookListObj.books.length + ", isFullList: " + bookListObj.isFullList);
          let bookList = model.BookListObject.fromObject(bookListObj);
          // get the latest time
          for (let book of bookList.getBooksList()) {
            let millis = timstamp2millis(book.getLastUpdatedTime());
            if (millis > this.bookLastUpdatedTime) {
              this.bookLastUpdatedTime = millis;
            }
          }
          this.log("bookLastUpdatedTime = " + new Date(this.bookLastUpdatedTime));
          this.listener.booksUpdated(bookList);
        }
      });      
    }
*/    
  }

  getBooks(): Observable<model.BookList> {    
    const url = this.tusachUrl + "/book/list/0";
    this.log("getBooks() - url:" + url);

    // convert to BookList
    return this.http.get(url).pipe(
      map(list => {
        console.log("getBooks() - received json books:");
        console.log(list);
        let bookList = this.bookListAdapter.adapt(list);
        console.log("getBooks() - converted books:");
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
      map(book => this.bookListAdapter.bookAdapter.adapt(book))
    );
  }

  updateBook(book: model.Book, cmd: string) : void {
    const url = this.tusachUrl + "/book/command/" + cmd;
    this.log(url + " - " + JSON.stringify(book));
    this.http.post(url, book).subscribe(
      data => {this.log("updateBook() - " + cmd + " book successfully. " + data)},
      error => {this.log("updateBook() - " + cmd + " book failed: " + error)}
    );
  }

  deleteBook(id: number): void {
    const url = this.tusachUrl + "/book/command/delete";
    this.log(url + " - " + id);
    let book = new model.Book();
    book.setId(id);
    this.http.post(url, book).subscribe(
      data => {this.log("deleteBook() - book deleted successfully. " + data)},
      error => {this.log("deleteBook() - book deleted error: " + error)}
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachJson: ${message}`);
    console.log(message);
  }
}
