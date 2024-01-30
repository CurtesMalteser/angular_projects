import { TestBed } from '@angular/core/testing';

import { CartService, CartServiceImpl } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
