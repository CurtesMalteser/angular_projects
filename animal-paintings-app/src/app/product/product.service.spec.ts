import { TestBed } from '@angular/core/testing';

import { ProductService, ProductServiceImpl } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
