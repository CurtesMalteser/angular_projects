import { Component, Inject, OnInit } from '@angular/core';
import { CART_SERVICE, CartService } from '../cart.service';
import { Product } from '../../models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackbar: MatSnackBar,
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
      .reduce((sum, current) => Number(sum) + Number(current), 0)
  }

  clearCart(): void {
    this.cartService.clearCart()
      .subscribe({
        next: () => {
          this.cartItems = []
          this.totalPrice = 0
          this.showSnackar('Your is empty now.')
        },
        error: (e) => console.error(`Clear cart failed. ${e}`)
      })
  }

  checkout() {
    this.cartService.checkout(this.cartItems)
      .subscribe({
        next: () => {
          this.cartItems = []
          this.totalPrice = 0
          this.showSnackar('Your order was succefully registered.')
        },
        error: (e) => console.error(`Clear cart failed. ${e}`)
      })
  }

  private showSnackar(message: string) {
    this.snackbar.open(message, '',
      {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      })
  }
}
