import { Injectable } from "@angular/core";
import { CART_SERVICE, CartService } from "./cart.service";
import { Observable, map, of, single, tap } from "rxjs";
import { Product } from "../models/product";


@Injectable()
export class MockCartService implements CartService {

  private products: Product[] = []

  addToCart(product: Product): Observable<Product> {
    return of(product).pipe(
      tap((p) => this.products.push(p))
    )
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

  getProducts(): Product[] {
    return this.products
  }
}

export const CART_SERVICE_PROVIDER = [{ provide: CART_SERVICE, useClass: MockCartService }];
