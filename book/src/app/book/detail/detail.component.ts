import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BooksService} from '../../service/book/books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book[];
  bookDetail: Book = {};

  constructor(private booksService: BooksService,
              private router: Router,
              private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.active.paramMap.subscribe(book => {
      this.booksService.findById(+book.get('id')).subscribe(value => {
          this.bookDetail = value;
        }
      );
    });
  }
}
