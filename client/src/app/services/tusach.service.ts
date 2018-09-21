import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModuleWithComponentFactories } from '@angular/compiler/src/jit/compiler';
import { model } from '../../typings';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TusachService {
  private tusachUrl = 'api/';
  constructor(
    private http: HttpClient, 
    private messageService: MessageService) {}

  getBooks(): Observable<model.Book[]> {
    const url = this.tusachUrl + "books/";
    this.messageService.add('TusachService: fetch books...')
    return this.http.get<model.Book[]>(url);
  }

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book> {
    const url = `${this.tusachUrl}books/${id}`;
    return this.http.get<model.Book>(url);
  }

  createBook(book: model.Book) : void {
    const url = this.tusachUrl + "books";
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
