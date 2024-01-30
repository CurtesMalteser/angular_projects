import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCT_SERVICE, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => products.forEach(p => console.log(p.name)),
      error: (e) => console.error(e)
    })
  }

}
