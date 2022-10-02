import {Component, OnInit} from '@angular/core';
import {BookCart} from '../model/cart';
import {BooksService} from '../service/book/books.service';
import {CartService} from '../service/cart/cart.service';


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
    this.bookCartService.findAll().subscribe(bookCart => {
      console.log(bookCart);
      this.bookCart = bookCart;
    });
  }
}
