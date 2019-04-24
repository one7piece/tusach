import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import * as model from '../../typings';
import {IBookListener, ITusachProxy} from './tusach.proxy';

// TODO replace TusachFake with TusachJson or TusachGrpc in production
import { TusachJson as TusachProxy } from './tusach.json';
//import { TusachFake as TusachProxy } from './tusach.fake';

@Injectable({
  providedIn: 'root'
})

export class TusachService {
  private listeners : IBookListener[] = [];
  private proxy : ITusachProxy;
  
  constructor(
    private http: HttpClient, 
    private messageService: MessageService) {  
    this.proxy = new TusachProxy(http, messageService, this);
  }

  booksUpdated(list: model.BookList) {
    for (var i=0; i<this.listeners.length; i++) {
      this.listeners[i].booksUpdated(list);
    }
  }

  subscribe(l: IBookListener): void {
    if (this.listeners.indexOf(l) == -1) {
      this.log("add subscriber: " + l);
      this.listeners.push(l);
      this.proxy.enableChangeDetection(true);
    } else {
      this.log("subscribe - ignore duplicate subscription!");
    }
  }

  unsubscribe(l: IBookListener): void {
    const index = this.listeners.indexOf(l);
    if (index != -1) {
      this.listeners.splice(index, 1);
      this.log("remove subscriber: " + l);
      if (this.listeners.length == 0) {
        this.proxy.enableChangeDetection(false);
      }
    } else {
      this.log("unsubscribe - cannot find listener: " + l);
    }
  }
  
  getBooks(): Observable<model.BookList> {
    return this.proxy.getBooks();
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    return this.proxy.getBook(id);
  }

  updateBook(book: model.Book, cmd: string) : void {
    this.proxy.updateBook(book, cmd);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachService: ${message}`);
    console.log(message);
  }
}
