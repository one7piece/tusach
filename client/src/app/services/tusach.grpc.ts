import { Observable, of, pipe } from 'rxjs';
import { Location } from '@angular/common'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as grpcWeb from 'grpc-web';
import { MessageService } from './message.service';
import * as model from '../../typings';
import { IBookListener } from './tusach.proxy'
import {timstamp2millis} from '../util/util';
import { subscribeOn } from 'rxjs/operators';

export class TusachGrpc {
  private detectChanges: boolean;
  private service : model.TusachClient;
  
  constructor(
    private location: Location,
    private messageService: MessageService,
    private listener: IBookListener) {
    
    this.detectChanges = false;
    const url = window.location.href;
    const route = location.path();
    const host = url.substr(0, url.indexOf(":", "http://".length))
    console.log("current url:" + url + ", angular path:" + route + ", host:" + host + ", route:" + route);
    this.service = new model.TusachClient(host + ":8080", null, null);
    this.subscribe();
  }

  enableChangeDetection(enabled: boolean) : void {
    this.detectChanges = enabled;
  }
  
  subscribe() {
    console.log("tusach.grpc.subscribe() - start");
    const request = new google_protobuf_empty_pb.Empty();
    const stream = this.service.subscribe(request, {});
    stream.on('data', (book) =>{
      console.log("tusach.grpc.subscribe() - received stream book:");
      console.log(book);
      this.listener.bookUpdated(book);
    });
    stream.on('status', (status: grpcWeb.Status) => {
      if (status.metadata) {
        console.log("tusach.grpc.subscribe() - received stream metadata:");
        console.log(status.metadata);
      }
    });    
    stream.on('end', () => {
      console.log("tusach.grpc.subscribe() - received end stream signal");
    });    
  }

  getBooks(): Observable<model.BookList> {    
    this.log("tusach.grpc.getBooks()");
    return new Observable<model.BookList>((observer) => {
      const request = new google_protobuf_empty_pb.Empty();
      let callback = (err: grpcWeb.Error, response: model.BookList) => {
        console.log("tusach.grpc.getBooks() - received bookList:");
        console.log(response);
        observer.next(response);
        observer.complete();
      };
      const call = this.service.getBooks(request, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.getBooks() - received metadata:");
          console.log(status.metadata);
        }
      });
    });    
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    this.log("tusach.grpc.getBook()");
    return new Observable<model.Book>((observer) => {
      const request = new model.BookID();
      request.setId(id);      
      let callback = (err: grpcWeb.Error, response: model.Book) => {
        console.log("tusach.grpc.getBook() - received book:");
        console.log(response);
        observer.next(response);
      };
      const call = this.service.getBook(request, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.getBook() - received metadata:");
          console.log(status.metadata);
        }
      });
    });    
  }

  updateBook(book: model.Book, cmd: string) : void {
    if (cmd == "create") {
      let callback = (err: grpcWeb.Error, response: model.Book) => {
        console.log("tusach.grpc.updateBook(create) - received book:");
        console.log(response);
      };
      const request = new model.NewBookRequest();
      request.setAuthor(book.getAuthor());
      request.setStartPageUrl(book.getStartPageUrl());
      request.setTitle(book.getTitle());
      request.setMaxNumPages(book.getMaxNumPages());
      const call = this.service.createBook(request, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.getBook(create) - received metadata:");
          console.log(status.metadata);
        }
      });
    } else if (cmd == "abort") {
      const request = new model.BookID();
      request.setId(book.getId());      
      let callback = (err: grpcWeb.Error, response: google_protobuf_empty_pb.Empty) => {
        console.log("tusach.grpc.updateBook(abort) - received response: ", err);
      };
      const call = this.service.abortBook(request, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.updateBook(abort) - received metadata:");
          console.log(status.metadata);
        }
      });
    } else if (cmd == "resume") {
      const request = new model.BookID();
      request.setId(book.getId());      
      let callback = (err: grpcWeb.Error, response: google_protobuf_empty_pb.Empty) => {
        console.log("tusach.grpc.updateBook(resume) - received response: ", err);
      };
      const call = this.service.resumeBook(request, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.updateBook(resume) - received metadata:");
          console.log(status.metadata);
        }
      });
    } else if (cmd == "update") {
      let callback = (err: grpcWeb.Error, response: model.Book) => {
        console.log("tusach.grpc.updateBook(update) - received response: ", response);
      };
      const call = this.service.updateBook(book, {}, callback);
      call.on('status', (status: grpcWeb.Status) => {
        if (status.metadata) {
          console.log("tusach.grpc.updateBook(update) - received metadata:");
          console.log(status.metadata);
        }
      });
    }
  }

  deleteBook(id: number): void {
    this.log("tusach.grpc.deleteBook - book:" + id);
    const request = new model.BookID();
    request.setId(id);      
    let callback = (err: grpcWeb.Error, response: google_protobuf_empty_pb.Empty) => {
      console.log("tusach.grpc.deleteBook - received response: ", err);
    };
    const call = this.service.deleteBook(request, {}, callback);
    call.on('status', (status: grpcWeb.Status) => {
      if (status.metadata) {
        console.log("tusach.grpc.deleteBook - received metadata:");
        console.log(status.metadata);
      }
    });
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TusachJson: ${message}`);
    console.log(message);
  }
}
