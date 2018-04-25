import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { CategoryService } from './category.service';
import { Observable } from 'rxjs/Rx';
import { Book } from '../model/book';
import { Category } from '../model/category';

@Injectable()
export class FacadeService {

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService) {

  }

  getBooksAndCategories(): Observable<Category[] | Book[]> {
    return Observable.merge(
      this.categoryService.getAll(),
      this.bookService.getAll()
    );
  }

  sumPages(): Observable<number> {
    return this.bookService.getAll()
      .mergeMap(book => book)
      .map(book => book.pages)
      .reduce((base, pages) => base + pages);
  }

}
