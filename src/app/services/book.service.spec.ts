import { TestBed, inject } from '@angular/core/testing';

import { Book } from '../model/book';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('should return some books', inject([BookService], (service: BookService) => {
    let books: Book[] = [];
    service.getAll().subscribe(
      data => books.concat(<Book[]>data),
      error => fail(error),
      () => expect(books.length).toBeGreaterThan(0)
    );
  }));
});
