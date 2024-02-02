import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { CART_SERVICE_PROVIDER, MockCartService } from '../../cart/mock.cart.service';
import { MockProductService, PRODUCT_SERVICE_PROVIDER } from '../mock.product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CART_SERVICE } from '../../cart/cart.service';
import { PRODUCT_SERVICE } from '../product.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: MockProductService;
  let cartService: MockCartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        BrowserAnimationsModule,
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

  it('get products on init successfully', () => {
    fixture.detectChanges()

    expect(component.filteredProducts.length).toBeGreaterThan(0)
  })

  it('applies filter', () => {
    fixture.detectChanges()

    const event = new Event('selection')
    
    let inputElement = (fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement)
    inputElement.dispatchEvent(event)
    inputElement.value = 'd'
    
    component.applyFilter(event)

    expect(component.filteredProducts.length).toBe(2)
  })

  it('applies sort low to high', () => {
    fixture.detectChanges()
    component.sortProducts("priceLowHigh")
    expect(component.filteredProducts[0].price).toBe(19)
  })

  it('applies sort high to low', () => {
    fixture.detectChanges()
    component.sortProducts("priceHighLow")
    expect(component.filteredProducts[0].price).toBe(79)
  })


  it('adds to cart successfully', () => {
    fixture.detectChanges()
    const product = component.filteredProducts[0]
    component.addToCart(product)

    expect(cartService.getProducts()).toContain(product)
  })

});
