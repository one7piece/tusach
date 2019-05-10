import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Timestamp from "google-protobuf/google/protobuf/timestamp_pb";
import { MessageService } from './message.service';
import * as model from '../../typings';
import { IBookListener } from './tusach.proxy'

export class TusachFake {
  private interval;
  //private bookLastUpdatedTime : Timestamp;
  private detectChanges: boolean;
  private bookList : model.BookList;
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private listener: IBookListener) {

    //this.bookLastUpdatedTime = new Timestamp();
    this.detectChanges = false;
    // create sample books
    let books : Array<model.Book> = [];
    for (let i=0; i<100; i++) {
      let book = new model.Book();
      book.setId(1000+i);
      book.setTitle("title$" + book.getId());
      book.setAuthor("author$" + book.getId());
      book.setCurrentPageNo(i+1);
      book.setStatus(model.BookStatusType.COMPLETED);
      books.push(book);
    }
    this.bookList = new model.BookList();
    this.bookList.setBooksList(books);
    this.bookList.setIsFullList(true);

    this.interval = setInterval(() => {
      this.pollForChanges();
    }, 10000);
  }

  enableChangeDetection(enabled: boolean) : void {
    this.detectChanges = enabled;
  }
  
  pollForChanges() {
    if (this.detectChanges) {
      //this.log("bookLastUpdatedTime = " + new Date(this.bookLastUpdatedTime.getSeconds()*1000));
      //this.listener.booksUpdated(bookList);
    }
  }

  getBooks(): Observable<model.BookList> {
    this.log("getBooks()...");
    let ob$ = Observable.create((observer) => {
      observer.next(this.bookList);
    });
    return ob$;
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    this.log("getBook() - " + id);
    var book = null;
    for (let i=0; i<this.bookList.getBooksList().length; i++) {
      if (id == this.bookList.getBooksList()[i].getId()) {
        book = this.bookList.getBooksList()[i];
        break;
      }
    }
    let ob$ = Observable.create((observer) => {
      observer.next(book);
    });
    return ob$;
  }

  updateBook(book: model.Book, cmd: string) : void {
    this.log("updateBook() - " + cmd + " -> " + JSON.stringify(book));
  }

  deleteBook(id: number): void {
    this.log("deleteBook() - book:" + id);
  }

  /** Log a HeroService message with the MessageService */
  private log(msg: string) {
    let message = "TusachFake: " + msg;
    this.messageService.add(message);
    console.log(message);
  }
}
