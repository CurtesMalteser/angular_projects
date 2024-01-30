import { Component, Inject, OnInit } from '@angular/core';
import { CART_SERVICE, CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems : Product[] = []

  constructor(
    @Inject(CART_SERVICE) private cartService: CartService,
    ) {}

    ngOnInit(): void {
      this.cartService.getCartItems()
      .subscribe({
        next: (items) =>  this.cartItems = items,
        error: (err) => console.error(err)
      })
    }

  }
