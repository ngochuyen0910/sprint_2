import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BooksService} from '../../service/book/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  book: Book[];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.booksService.findAll().subscribe(book => {
      this.book = book;
      console.log(book);
    });
  }
}
