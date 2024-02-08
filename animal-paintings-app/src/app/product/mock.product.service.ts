import { Injectable } from '@angular/core';
import { Observable, of, single } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCT_SERVICE, ProductService } from './product.service';

@Injectable()
export class MockProductService implements ProductService {

  getProducts(): Observable<Product[]> {
    return of(this.returnProducts()).pipe(single())
  }

  private returnProducts(): Product[] {
    return [
      new Product(1, "Dog", 79, "http://127.0.0.1:5000/image/Product_01.jpg"),
      new Product(2, "Dinosaur", 39, "http://127.0.0.1:5000/image/Product_02.jpg"),
      new Product(6, "Cat", 19, "http://127.0.0.1:5000/image/Product_06.jpg"),
    ]
  }

}

export const PRODUCT_SERVICE_PROVIDER = [{ provide: PRODUCT_SERVICE, useClass: MockProductService }];