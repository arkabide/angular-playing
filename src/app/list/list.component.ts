import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  books: Book[] = [];
  totalPages: number;
  message: string;

  constructor(
    private facadeService: FacadeService,
    private categoryService: CategoryService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.message = params.message;
    });

    this.loadBooks();
  }

  ngOnInit() {
  }

  sumPages() {
    this.facadeService.sumPages().subscribe(
      data => this.totalPages = data,
      error => console.error(error)
    )
  }

  addForm() {
    this.router.navigateByUrl('/form');
  }


  remove(book: Book) {
    this.bookService.delete(book).subscribe(
      data => console.log(JSON.stringify(data)),
      error => console.error("Error ", error),
      () => this.loadBooks());
  }

  loadBooks() {
    this.bookService.getAll().subscribe(
      data => this.books = data,
      error => console.error("Error ", error),
      () => this.sumPages());
  }
}
