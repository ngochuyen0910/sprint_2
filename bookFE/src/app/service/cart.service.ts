import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookCart} from '../model/cart';
import {Book} from '../model/book';

const API_URL = 'http://localhost:8080/api/cart/';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: BookCart[] = [];

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<BookCart[]> {
    return this.http.get<BookCart[]>(API_URL);
  }

  addCard(book: Book, amount: number) {
    let temp: BookCart = {};
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].book.id === book.id) {
        temp = {
          book,
          amount: amount + this.cart[i].amount
        };
        this.cart[i] = temp;
        if (temp.amount === 0) {
          this.cart.splice(i, 1);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
        return;
      }
    }
    temp = {
      book,
      amount
    };
    this.cart.push(temp);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
