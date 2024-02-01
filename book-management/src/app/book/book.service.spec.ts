import { TestBed } from '@angular/core/testing';

import { BookService, BookServiceImpl } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
