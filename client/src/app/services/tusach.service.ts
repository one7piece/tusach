import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common'
import { MessageService } from './message.service';
import * as model from '../../typings';
import { IBookListener, ITusachProxy} from './tusach.proxy';

import { TusachRest } from './tusach.rest';
import { TusachGrpc } from './tusach.grpc';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
  private host : String;
  
  constructor(
    //private location : Location,
    private http: HttpClient, 
    private messageService: MessageService) {  

    const url = window.location.href;
    this.host = url.substr(0, url.indexOf(":", "http://".length))
    console.log("current url:" + url + ", host:" + this.host);

    var serviceType = ServiceType.GRPC;
    const search = window.location.search;
    if (search.length > 1 && search.substring(1).startsWith("serviceType=") == true) {
      var value = search.substring(1 + "serviceType=".length);
      console.log("using service type: " + value);
      if (value == "rest") {
        serviceType = ServiceType.REST;
      }
    }
    this.setServiceType(serviceType);
  }

  setServiceType(type: ServiceType) {
    if (type == ServiceType.GRPC && this.grpcService == null) {
      this.grpcService = new TusachGrpc(this.host, this.messageService, this);
    } else if (type == ServiceType.REST && this.restService == null) {
      this.restService = new TusachRest(this.http, this.messageService, this);
    }

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
