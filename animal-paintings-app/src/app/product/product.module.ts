import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PRODUCT_SERVICE, ProductServiceImpl } from './product.service';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  providers: [{ provide: PRODUCT_SERVICE, useClass: ProductServiceImpl }]
})
export class ProductModule { }
