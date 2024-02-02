import { Injectable } from "@angular/core";
import { CART_SERVICE, CartService } from "./cart.service";
import { Observable, of } from "rxjs";
import { Product } from "../models/product";


@Injectable()
export class MockCartService implements CartService {

  addToCart(product: Product): Observable<Product> {
    return of(product)
  }
  getCartItems(): Observable<Product[]> {
    return of([new Product(1, "test", 1, "")])
  }
  clearCart(): Observable<void> {
    return of()
  }
  checkout(product: Product[]): Observable<void> {
    return of()
    //throw new Error('Method not implemented.');
  }
}

export const CART_SERVICE_PROVIDER = [ { provide: CART_SERVICE, useClass: MockCartService } ];
