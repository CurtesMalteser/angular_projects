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

  private products: Product[] = []
  filteredProducts: Product[] = []

  private sortOrder: string = ''

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: ProductService,
    @Inject(CART_SERVICE) private cartService: CartService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products
        this.filteredProducts = products
      },
      error: (e) => console.error(e)
    })
  }

  applyFilter(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase()
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(search))

    this.sortProducts(this.sortOrder)
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

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue
    if (this.sortOrder === "priceLowHigh") {
      this.filteredProducts.sort((a, b) => a.price - b.price)
    } else if (this.sortOrder === "priceHighLow") {
      this.filteredProducts.sort((a, b) => b.price - a.price)
    }
  }

}
