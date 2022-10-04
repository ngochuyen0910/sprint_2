import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

const API_URL = 'http://localhost:8080/api/public/api/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + '/' + id);
  }
}
