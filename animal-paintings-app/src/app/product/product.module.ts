import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PRODUCT_SERVICE, ProductServiceImpl } from './product.service';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{ provide: PRODUCT_SERVICE, useClass: ProductServiceImpl }]
})
export class ProductModule { }
