import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PRODUCT_SERVICE, ProductServiceImpl } from './product.service';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [{ provide: PRODUCT_SERVICE, useClass: ProductServiceImpl }]
})
export class ProductModule { }
