import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CART_SERVICE, CartServiceImpl } from './cart.service';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [{ provide: CART_SERVICE, useClass: CartServiceImpl }]
})
export class CartModule { }
