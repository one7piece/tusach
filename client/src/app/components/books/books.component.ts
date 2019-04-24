import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as model from '../../../typings';
import { TusachService } from '../../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: model.Book[];

  constructor(private tusachService: TusachService,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log("ngOnInit start...");
    this.getBooks();
    this.tusachService.subscribe(this);
    console.log("ngOnInit ended");
  }

  ngOnDestroy() {
    this.tusachService.unsubscribe(this);
  }

  getBooks() {
    console.log("getting books from tusach service...");
    this.tusachService.getBooks().subscribe(bookList => {
      this.books = bookList.getBooksList();
      if (this.books) {
        this.sortBooks();
        console.log("#books loaded: " + this.books.length);
      }
    });
  }

  getIconColor(book: model.Book) : String {
    let color = "blue";
    if (book != null) {
      if (book.getStatus() == model.BookStatusType.IN_PROGRESS) {
        color = "yellow";
      } else if (book.getEpubCreated() && book.getStatus() == model.BookStatusType.COMPLETED) {
        color = "green";
      } else if (book.getEpubCreated()) {
        color = "red";
      }
    }
    return color;
  }

  booksUpdated(list: model.BookList) {
    let sortPending = false;
    if (list.getIsFullList()) {
      this.books = list.getBooksList();
      sortPending = true;
    } else {
      for (var i=0; i<list.getBooksList().length; i++) {
        let book = list.getBooksList()[i];
        let index = this.findBookIndex(book.getId());
        if (index != -1) {
          if (book.getDeleted()) {
            console.log("found deleted book: " + book.getId() + " - " + book.getTitle() + " (" + book.getStatus() + ") #pages=" +  book.getCurrentPageNo());
            this.books.splice(index, 1);
          } else {
            console.log("found updated book " + book.getId() + ". " + book.getTitle() 
              +  " oldStatus(" + this.books[index].getStatus() + ") newStatus(" + book.getStatus() + ") #pages=" +  book.getCurrentPageNo());
            if (this.books[index].getStatus() != book.getStatus()) {
              sortPending = true;
            }
            this.books[index] = book;
          }
        } else {
          // new book
          this.books.push(book);
          sortPending = true;
          console.log("found new book: " + book.getId() + " - " + book.getTitle() + " (" + book.getStatus() + ") #pages=" +  book.getCurrentPageNo());
        }
      }
    }
    if (sortPending) {
      this.sortBooks();
    }
    setTimeout(() => this.ref.detectChanges(), 100);    
  }

  sortBooks() {
    if (this.books) {
      this.books.sort((b1, b2) => {        
        if (b1.getStatus() != b2.getStatus()) {
          if (b1.getStatus() == model.BookStatusType.IN_PROGRESS) {
            return -1;
          } else if (b2.getStatus() == model.BookStatusType.IN_PROGRESS) {
            return 1;
          }
        } 
        return b1.getTitle().localeCompare(b2.getTitle());
      });      
      }
  }

  findBookIndex(id: number) : number {
    for (var i=0; i<this.books.length; i++) {
      if (this.books[i].getId() == id) {
        return i;
      }
    }
    return -1;
  }
}
