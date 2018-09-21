import { Component, OnInit } from '@angular/core';
import { model } from '../../../typings';
import { TusachService } from '../../services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: model.Book[];

  constructor(private tusachService: TusachService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() : void {
    this.tusachService.getBooks().subscribe(books => this.books = books);
  }
}
