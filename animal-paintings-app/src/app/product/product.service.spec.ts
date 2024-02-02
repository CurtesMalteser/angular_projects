import { TestBed } from '@angular/core/testing';

import { ProductService, ProductServiceImpl } from './product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ProductServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
