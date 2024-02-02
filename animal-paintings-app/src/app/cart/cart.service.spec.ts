import { TestBed } from '@angular/core/testing';

import { CartService, CartServiceImpl } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CartServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
