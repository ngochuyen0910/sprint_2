import {Component, OnInit} from '@angular/core';
import {BookCart} from '../model/cart';
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

  deleteCart(id: number) {
    for (const card of this.bookCart) {
      if (card.book.id === id) {
        this.bookCart.splice(this.bookCart.indexOf(card), 1);
        localStorage.setItem('cart', JSON.stringify(this.bookCart));
        return;
      }
    }
  }
}
