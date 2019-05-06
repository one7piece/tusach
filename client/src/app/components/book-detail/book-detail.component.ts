import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TusachService } from '../../services';
import * as model from '../../../typings';
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: model.Book.AsObject;
  error: string;
  timestampAdapter = new model.JsonTimestampAdapter();
  private bookListAdapter = new model.JsonBookListAdapter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tusachService: TusachService,
    private location: Location) {    
    console.log("BookDetailComponent - constructor()");
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      console.log("NavigationEnd event!");
      //this.initBook();
    });      
  }

  ngOnInit() {
    this.initBook();
    this.tusachService.subscribe(this);
  }

  ngOnDestroy() {
    this.tusachService.unsubscribe(this);
  }

  isBookInProgress() : boolean {
    return this.book.status == model.BookStatusType.IN_PROGRESS;
  }

  getBookStatus() : string {
    var lastUpdatedTimeStr = "";
    if (this.book.lastUpdatedTime) {
      lastUpdatedTimeStr = this.timestampAdapter.adapt(this.book.lastUpdatedTime).toDate().toLocaleString();
    }

    var str = model.getBookStatusAsString(this.book.status) + " (pages#";
    if (this.book.currentPageNo >= 0) {
      str += this.book.currentPageNo;
    } else {
      str += "?"
    }
    str +=  " "  + lastUpdatedTimeStr + ")";
    return str;
  }

  getDownloadLink() : string {
    return "/tusach/download/" + this.book.title + "?bookId=" + this.book.id;
  }

  create() : void {
    if (this.book.title == "") { 
      this.error = "Book Title cannot be empty!";
      return;
    }
    if (this.book.startPageUrl == "") { 
      this.error = "First Chapter Url cannot be empty!";
      return;
    }
    let book = this.bookListAdapter.bookAdapter.adapt(this.book);
    this.tusachService.updateBook(book, "create");    
    this.router.navigate(['books']);
  }

  delete() : void {
    console.log("delete() - " + this.book.title + "(" + this.book.id + ")");
    this.tusachService.deleteBook(this.book.id);
  }

  update(command: string) : void {
    if (this.book.title == "" || this.book.startPageUrl == "") {      
      return;
    }
    let book = this.bookListAdapter.bookAdapter.adapt(this.book);
    console.log("update() - '" + command + "' : ", book);
    this.tusachService.updateBook(book, command);
  }

  initBook(): void {
    // route parameters are always string, +operator convert string to a number
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("BookDetailComponent - initBook:" + id);
    if (id == 0) {
      this.book = new model.Book().toObject();      
    } else {
      this.tusachService.getBook(id).subscribe(book => {
        console.log("book loaded", book);
        this.book = book.toObject();
        console.log("book.AsObject:", this.book);
      });
    }
  }

  bookUpdated(book: model.Book) {
    if (this.book.id > 0 && this.book.id == book.getId()) {
      this.book = book.toObject();
    }
  }

  booksUpdated(list: model.BookList) {
    for (var book of list.getBooksList()) {
      if (this.book.id == book.getId()) {
        this.book = book.toObject();        
        break;
      }
    }
    if (this.book.deleted) {
      this.router.navigate(['books']);
    }
  }

}
