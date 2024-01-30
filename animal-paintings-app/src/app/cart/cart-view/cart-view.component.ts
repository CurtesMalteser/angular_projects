import { Component, Inject } from '@angular/core';
import { CART_SERVICE, CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  constructor(
    @Inject(CART_SERVICE) private cartService: CartService,
    ) {}

  }
