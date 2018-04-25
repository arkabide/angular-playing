import { Category } from './category'

export class Book {

  id: number;
  author: string;
  title: string;
  pages: number;
  category: Category;

  constructor(id?: number, author?: string, title?: string, pages?: number, category?: Category) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.category = category;
  }
}
