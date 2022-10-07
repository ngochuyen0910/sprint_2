import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BooksService} from '../../service/books.service';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  book: Book[];
  keyword = '';

  constructor(private booksService: BooksService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.booksService.findAll(this.keyword).subscribe(book => {
      this.book = book;
      console.log(book);
    });
  }

  search() {
    console.log(this.keyword);
    if (this.keyword === undefined) {
      this.keyword = '';
      console.log(this.keyword);
    }
    this.booksService.findAll(this.keyword).subscribe(book => {
      this.book = book;
      this.keyword = '';
    });
  }

  addCart(item: Book) {
    this.cartService.addCard(item, 1);
  }
}
