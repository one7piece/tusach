import { Observable, of } from 'rxjs';
import * as model from '../../typings';

export interface IBookListener {
  booksUpdated(list: model.BookList);
  bookUpdated(book: model.Book);
  bookUpdateStatus(book: model.Book, cmd: string, success: boolean, errorMsg: string);
}

export interface ITusachProxy {
  /** get all books */
  getBooks(): Observable<model.BookList>;

  /** GET book by id. Will 404 if id not found */
  getBook(id: number): Observable<model.Book>;
  
  /** update (abort/update/resume) book */
  updateBook(book: model.Book, cmd: string) : void;

  /** delete book */
  deleteBook(id: number): void;

  enableChangeDetection(enable: boolean) : void;

  login(provider: string) : void;
}