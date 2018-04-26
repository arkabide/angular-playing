import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Category } from '../model/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categories: Category[] = [];
  newBook: Book;

  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private router: Router) {

    this.newBook = new Book(Math.floor(Math.random() * 56));
    this.loadCategories();
  }

  ngOnInit() {
  }

  add() {
    this.bookService.add(this.newBook).subscribe(
      data => console.log(JSON.stringify(data)),
      error => console.error("Error ", error),
      () => this.router.navigate(['/list/', { message: 'asdasda' }]));
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      data => this.categories = data,
      error => console.error("Error ", error),
      () => console.log("Categories loaded"))
  }
}
