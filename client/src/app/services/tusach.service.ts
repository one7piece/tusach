import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common'
import { MessageService } from './message.service';
import * as model from '../../typings';
import { IBookListener, ITusachProxy} from './tusach.proxy';

import { TusachRest } from './tusach.rest';
import { TusachGrpc } from './tusach.grpc';

export enum ServiceType {
  GRPC = "grpc",
  REST = "rest"
} 

@Injectable({
  providedIn: 'root'
})

export class TusachService {
  private listeners : IBookListener[] = [];
  private proxy : ITusachProxy;
  private grpcService : TusachGrpc;
  private restService : TusachRest;
  
  constructor(
    private location : Location,
    private http: HttpClient, 
    private messageService: MessageService) {  
    this.grpcService = new TusachGrpc(location, messageService, this);
    this.restService = new TusachRest(http, messageService, this);
    this.setServiceType(ServiceType.GRPC);
  }

  setServiceType(type: ServiceType) {
    if (type == ServiceType.REST) {
      this.proxy = this.restService;
      console.log("setServiceType - selected REST");
    } else {
      this.proxy = this.grpcService;
      console.log("setServiceType - selected GRPC");
    }
  }

  bookUpdated(book: model.Book) {
    for (var i=0; i<this.listeners.length; i++) {
      this.listeners[i].bookUpdated(book);
    }
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

  deleteBook(id: number) : void {
    this.proxy.deleteBook(id);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachService: ${message}`);
    console.log(message);
  }
}
