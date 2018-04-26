import { TestBed, inject } from '@angular/core/testing';

import { FacadeService } from './facade.service';
import { BookService } from './book.service';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';

describe('FacadeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService, CategoryService, FacadeService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([FacadeService], (service: FacadeService) => {
    expect(service).toBeTruthy();
  }));

  it('should have many pages', inject([FacadeService], (service: FacadeService) => {
    let pages = 0;
    service.sumPages().subscribe(
      data => pages = pages + data,
      error => fail(error),
      () => expect(pages).toBeGreaterThan(0)
    );
  }));

});
