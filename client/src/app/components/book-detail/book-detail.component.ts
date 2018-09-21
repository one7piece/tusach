import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { util } from 'protobufjs';
import { ActivatedRoute, Router } from '@angular/router';
import { model } from '../../../typings';
import { TusachService } from '../../services';

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
    //this.book = new model.Book();
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
    if (this.book.lastUpdatedTime > 0) {
      let bits = util.LongBits.from(this.book.lastUpdatedTime);
      lastUpdatedTimeStr = new Date(bits.toNumber()).toLocaleString();
    }
    return this.book.status + " (" + this.book.currentPageNo + ") lastUpdated:" + lastUpdatedTimeStr;
  }

  create() : void {
    if (this.book.title == "" || this.book.startPageUrl == "") {      
      return;
    }
    this.tusachService.createBook(this.book);
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
