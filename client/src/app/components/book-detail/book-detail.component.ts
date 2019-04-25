import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TusachService } from '../../services';
import * as model from '../../../typings';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: model.Book.AsObject;
  error: string;
  timestampAdapter = new model.JsonTimestampAdapter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tusachService: TusachService,
    private location: Location) {
    console.log("BookDetailComponent - constructor()");
  }

  ngOnInit() {
    this.getBook();
  }

  isBookInProgress() : boolean {
    return this.book.status == model.BookStatusType.IN_PROGRESS;
  }

  getBookStatus() : string {
    var lastUpdatedTimeStr = "";
    if (this.book.lastUpdatedTime) {
      lastUpdatedTimeStr = this.timestampAdapter.adapt(this.book.lastUpdatedTime).toDate().toLocaleString();
    }

    var str = model.getBookStatusAsString(this.book.status) + " (";
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
    //this.tusachService.updateBook(this.book, "create");
    this.router.navigate(['books']);
  }

  update(command: string) : void {
    if (this.book.title == "" || this.book.startPageUrl == "") {      
      return;
    }
    //this.tusachService.updateBook(this.book, command);
    this.router.navigate(['books']);
  }

  getBook(): void {
    // route parameters are always string, +operator convert string to a number
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("BookDetailComponent - getBook:" + id);
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
}
