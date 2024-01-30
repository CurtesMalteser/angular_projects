import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCT_SERVICE, ProductService } from '../product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products : Product[] = []

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => this.products = products,
      error: (e) => console.error(e)
    })
  }

}
