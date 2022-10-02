import { TestBed } from '@angular/core/testing';

import { BookCartService } from './book-cart.service';

describe('BookCartService', () => {
  let service: BookCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
