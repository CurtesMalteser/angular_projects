import { Injectable, InjectionToken, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, single } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

export const CART_SERVICE = new InjectionToken<CartService>('cart.service');

export interface CartService {
  addToCart(product: Product): Observable<Product>
  getCartItems(): Observable<Product[]>
  clearCart(): Observable<void>
  checkout(product: Product[]): Observable<void>
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceImpl implements CartService {

  private cartUrl = `${environment.apiUrl}/cart`
  private checkoutUrl = `${environment.apiUrl}/checkout`

  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.cartUrl, product)
      .pipe(single())
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.cartUrl)
      .pipe(single())
  }

  clearCart(): Observable<void> {
    return this.httpClient
      .delete<void>(this.cartUrl)
      .pipe(single())
  }

  checkout(product: Product[]): Observable<void> {
    return this.httpClient
      .post<void>(this.checkoutUrl, product)
      .pipe(single())
  }
}
