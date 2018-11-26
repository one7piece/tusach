import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Long } from 'protobufjs';
import { TusachService } from '../../services';
import { CommonUtils, model } from '../../common.utils';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: model.Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tusachService: TusachService,
    private location: Location) {
    console.log("constructor()");
    this.book = new model.Book();
  }

  ngOnInit() {
    console.log("ngOnInit()");
    this.getBook();
  }

  isBookInProgress() : boolean {
    return this.book.status == model.BookStatusType.IN_PROGRESS;
  }

  getBookStatus() : string {
    var lastUpdatedTimeStr = "";
    if (this.book.lastUpdatedTime != undefined && this.book.lastUpdatedTime != null) {
      let ms = CommonUtils.convertTimestamp2Epoch(this.book.lastUpdatedTime);      
      lastUpdatedTimeStr = new Date(ms).toLocaleString();
    }
    return this.book.status + " (" + this.book.currentPageNo + ") lastUpdated:" + lastUpdatedTimeStr;
  }

  create() : void {
    if (this.book.title == "" || this.book.startPageUrl == "") {      
      return;
    }
    this.tusachService.updateBook(this.book, "create");
    this.router.navigate(['/books']);
  }

  update() : void {
    if (this.book.title == "" || this.book.startPageUrl == "") {      
      return;
    }
    this.tusachService.updateBook(this.book, "update");
    this.router.navigate(['/books']);
  }

  getBook(): void {
    // route parameters are always string, +operator convert string to a number
    const id = +this.route.snapshot.paramMap.get('id');
    if (id == 0) {
      this.book = new model.Book();      
    } else {
      this.tusachService.getBook(id).subscribe(book => this.book = book);
    }
  }
}
