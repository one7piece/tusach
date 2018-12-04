import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services';
 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor(private messages: MessageService) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let now = Date.now();
    
    console.log(`intercept() - ${request.method} "${request.urlWithParams} - body:" ${request.body}`);

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          let msg = `${request.method} "${request.urlWithParams}" OK`;
          console.log(msg);
          this.messages.add(msg);
        } else if (event instanceof HttpErrorResponse) {
          // handle error response
          let errorResponse = <HttpErrorResponse>event;          
          let msg = `Response: ${request.method} "${request.urlWithParams}" FAILED: ${errorResponse.message}(${errorResponse.error})`;
          console.log(msg);
          this.messages.add(msg);
        }
      },
      err => {
        console.log(err);
        // handle error        
        let msg = `Response: ${request.method} "${request.urlWithParams}" ERROR: ${err.error.message}`;
        console.log(msg);
        this.messages.add(msg);
      })
    );
  }
}