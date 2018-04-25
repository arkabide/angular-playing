import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class BookService {
  books: Book[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return <Observable<Book[]>>this.httpClient.get('http://localhost:3000/books');
  }

  update(book: Book): Observable<Book[]> {
    return <Observable<Book[]>>this.httpClient.put('http://localhost:3000/books/', book);
  }

  remove(book: Book): Observable<Book[]> {
    return <Observable<Book[]>>this.httpClient.delete('http://localhost:3000/books/' + book.id);
  }

  add(book: Book): Observable<Book[]> {
    return <Observable<Book[]>>this.httpClient.post('http://localhost:3000/books', book);
  }
}
