import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCT_SERVICE, ProductService } from '../product.service';
import { Product } from '../../models/product';
import { CART_SERVICE, CartService } from '../../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: ProductService,
    @Inject(CART_SERVICE) private cartService: CartService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => this.products = products,
      error: (e) => console.error(e)
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
      .subscribe({
        next: () => this.snackbar.open(`${product.name} was added to the cart.`, '',
          {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          }),
        error: (e) => console.error(`Clear cart failed. ${e}`)
      })
  }
}
