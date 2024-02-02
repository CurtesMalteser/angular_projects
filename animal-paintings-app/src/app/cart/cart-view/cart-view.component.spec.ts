import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartViewComponent } from './cart-view.component';
import { CART_SERVICE_PROVIDER, MockCartService } from '../mock.cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CART_SERVICE, CartService } from '../cart.service';
import { Injector } from '@angular/core';

describe('CartViewComponent', () => {
  let component: CartViewComponent;
  let fixture: ComponentFixture<CartViewComponent>;
  let snackbar: MatSnackBar;
  let cartService: MockCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartViewComponent],
      imports: [
        MatCardModule,
        MatListModule,
      ],
      providers: [
        CART_SERVICE_PROVIDER
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartViewComponent);
    component = fixture.componentInstance;

    cartService = (TestBed.inject(CART_SERVICE) as MockCartService);

    snackbar = TestBed.inject(MatSnackBar)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cartService should create', () => {
    expect(cartService).toBeTruthy();
  });
});
