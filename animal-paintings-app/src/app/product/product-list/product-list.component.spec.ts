import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { CART_SERVICE_PROVIDER, MockCartService } from '../../cart/mock.cart.service';
import { MockProductService, PRODUCT_SERVICE_PROVIDER } from '../mock.product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CART_SERVICE } from '../../cart/cart.service';
import { PRODUCT_SERVICE } from '../product.service';
import { single } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let snackbar: MatSnackBar;
  let productService: MockProductService;
  let cartService: MockCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
      ],
      providers: [
        PRODUCT_SERVICE_PROVIDER,
        CART_SERVICE_PROVIDER
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  
    cartService = (TestBed.inject(CART_SERVICE) as MockCartService);
    productService = (TestBed.inject(PRODUCT_SERVICE) as MockProductService);

    snackbar = TestBed.inject(MatSnackBar)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cartService should create', () => {
    expect(cartService).toBeTruthy();
  });

  it('productService should create', () => {
    expect(productService).toBeTruthy();
  });

  it('get products succeffully', () => {
    productService.getProducts()
    .pipe(
      single()
    ).subscribe(products => expect(products.length).toBeGreaterThan(0))
  })

});
