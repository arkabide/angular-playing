import { TestBed, inject } from '@angular/core/testing';

import { Category } from '../model/category';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));

  it('should return some categories', inject([CategoryService], (service: CategoryService) => {
    let categories: Category[] = [];
    service.getAll().subscribe(
      data => categories.concat(<Category[]>data),
      error => fail(error),
      () => expect(categories.length).toBeGreaterThan(0)
    );
  }));
});
