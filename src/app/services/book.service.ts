import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { RestService } from './base/rest.service';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { environment } from '../../environments/environment';

@Injectable()
export class BookService extends RestService<Book>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  resourceBase(): string {
    return 'books';
  }

  host(): string {
    return environment.restEndpoint;
  }

  getItemId(item: Book): number {
    return item.id;
  }

}
