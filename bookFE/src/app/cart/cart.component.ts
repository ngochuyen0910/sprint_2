import {Component, OnInit} from '@angular/core';
import {BookCart} from '../model/cart';
import {BooksService} from '../service/books.service';
import {CartService} from '../service/cart.service';
import {Book} from '../model/book';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bookCart: BookCart[];

  constructor(private bookCartService: CartService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookCart = JSON.parse(localStorage.getItem('cart'));
  }

  decCard(item: Book) {
    this.bookCartService.addCard(item, -1);
    this.getAll();
  }
  incCard(item: Book) {
    this.bookCartService.addCard(item, 1);
    this.getAll();
  }
}
