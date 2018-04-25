import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newBook: Book = new Book(Math.floor(Math.random() * 56));
  books: Book[] = [];
  categories: Category[] = [];
  totalPages: number;

  constructor(
    private facadeService: FacadeService,
    private categoryService: CategoryService,
    private bookService: BookService) {

    this.facadeService.getBooksAndCategories().subscribe(
      data => {
        if (Array.isArray(data) && data[0] instanceof Category) {
          this.categories = <Category[]>data;
        } else {
          this.books = <Book[]>data;
        }
      }
    );

  }

  ngOnInit() {
  }

  sumPages() {
    this.facadeService.sumPages().subscribe(
      data => this.totalPages = data,
      error => console.error(error)
    )
  }

  remove(book: Book) {
    this.bookService.delete(book).subscribe(
      data => console.log(JSON.stringify(data)),
      error => console.error("Error ", error),
      () => this.loadBooks());
  }

  add() {
    this.bookService.add(this.newBook).subscribe(
      data => console.log(JSON.stringify(data)),
      error => console.error("Error ", error),
      () => this.loadBooks());
    this.newBook = new Book(Math.floor(Math.random() * 56));
  }

  loadBooks() {
    this.bookService.getAll().subscribe(
      data => this.books = data,
      error => console.error("Error ", error),
      () => console.log("Books loaded"));
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      data => this.categories = data,
      error => console.error("Error ", error),
      () => console.log("Categories loaded"))
  }
}
