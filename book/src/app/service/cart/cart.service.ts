import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookCart} from '../../model/cart';

const API_URL = 'http://localhost:8080/api/cart/';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<BookCart[]> {
    return this.http.get<BookCart[]>(API_URL);
  }
}
