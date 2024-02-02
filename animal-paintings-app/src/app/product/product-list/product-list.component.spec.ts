import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { CART_SERVICE_PROVIDER } from '../../cart/mock.cart.service';
import { PRODUCT_SERVICE_PROVIDER } from '../mock.product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let snackbar: MatSnackBar;

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
  
    snackbar = TestBed.inject(MatSnackBar)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
