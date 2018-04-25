import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { RestService } from './base/rest.service';

@Injectable()
export class CategoryService extends RestService<Category>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  resourceBase(): string {
    return 'categories';
  }

  host(): string {
    return environment.restEndpoint;
  }

  getItemId(item: Category): number {
    return item.id;
  }
}
