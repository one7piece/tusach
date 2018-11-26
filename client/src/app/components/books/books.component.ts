import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { model } from '../../../typings';
import { TusachService } from '../../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: model.IBook[];

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
      this.books = bookList.books;
      if (this.books) {
        this.sortBooks();
        console.log("#books loaded: " + this.books.length);
      }
    });
  }

  getIconColor(book: model.Book) : String {
    let color = "blue";
    if (book != null) {
      if (book.status == model.BookStatusType.IN_PROGRESS) {
        color = "yellow";
      } else if (book.epubCreated && book.status == model.BookStatusType.COMPLETED) {
        color = "green";
      } else if (book.epubCreated) {
        color = "red";
      }
    }
    return color;
  }

  booksUpdated(list: model.BookList) {
    let sortPending = false;
    if (list.isFullList) {
      this.books = list.books;
      sortPending = true;
    } else {
      for (var i=0; i<list.books.length; i++) {
        let book = list.books[i];
        let index = this.findBookIndex(book.ID);
        if (index != -1) {
          if (book.deleted) {
            console.log("found deleted book: " + book.ID + " - " + book.title + " (" + book.status + ") #pages=" +  book.currentPageNo);
            this.books.splice(index, 1);
          } else {
            console.log("found updated book " + book.ID + ". " + book.title 
              +  " oldStatus(" + this.books[index].status + ") newStatus(" + book.status + ") #pages=" +  book.currentPageNo);
            if (this.books[index].status != book.status) {
              sortPending = true;
            }
            this.books[index] = book;
          }
        } else {
          // new book
          this.books.push(book);
          sortPending = true;
          console.log("found new book: " + book.ID + " - " + book.title + " (" + book.status + ") #pages=" +  book.currentPageNo);
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
        if (b1.status != b2.status) {
          if (b1.status == model.BookStatusType.IN_PROGRESS) {
            return -1;
          } else if (b2.status == model.BookStatusType.IN_PROGRESS) {
            return 1;
          }
        } 
        return b1.title.localeCompare(b2.title);
      });      
      }
  }

  findBookIndex(id: number) : number {
    for (var i=0; i<this.books.length; i++) {
      if (this.books[i].ID == id) {
        return i;
      }
    }
    return -1;
  }
}
