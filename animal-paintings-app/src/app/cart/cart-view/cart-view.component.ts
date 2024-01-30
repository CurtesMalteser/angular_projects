import { Component, Inject, OnInit } from '@angular/core';
import { CART_SERVICE, CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = []
  totalPrice: number = 0

  constructor(
    @Inject(CART_SERVICE) private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems()
      .subscribe({
        next: (items) => {
          this.cartItems = items
          this.totalPrice = this.getTotalPrice()
        },
        error: (err) => console.error(err)
      })
  }

  private getTotalPrice(): number {
    return this.cartItems
      .map(item => item.price)
      .reduce((sum, current) =>  Number(sum) + Number(current), 0)
  }
}
