import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newBook: Book = new Book(Math.floor(Math.random() * 56));
  books: Book[] = [];
  categories: Category[] = [];

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService) {

    this.loadCategories();
    this.loadBooks();
  }

  ngOnInit() {
  }

  remove(book: Book) {
    this.bookService.remove(book).subscribe(
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
    this.bookService.getBooks().subscribe(
      data => this.books = data,
      error => console.error("Error ", error),
      () => console.log("Books loaded"));
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error("Error ", error),
      () => console.log("Categories loaded"))
  }
}
