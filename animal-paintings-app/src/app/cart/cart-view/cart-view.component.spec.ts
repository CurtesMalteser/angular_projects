import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewComponent } from './cart-view.component';
import { CART_SERVICE, CartService } from '../cart.service';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Injectable()
class MockCartService implements CartService {
  addToCart(product: Product): Observable<Product> {
    return of(product)
  }
  getCartItems(): Observable<Product[]> {
    return of([new Product(1, "test", 1, "")])
  }
  clearCart(): Observable<void> {
    return of()
  }
  checkout(product: Product[]): Observable<void> {
    return of()
    //throw new Error('Method not implemented.');
  }
}

const SIGNALR_PROVIDER = [ { provide: CART_SERVICE, useClass: MockCartService } ];

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;
  let snackbar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartViewComponent],
      imports: [
        MatCardModule,
        MatListModule,
      ],
      providers: [
        SIGNALR_PROVIDER
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;

    snackbar = TestBed.inject(MatSnackBar)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
