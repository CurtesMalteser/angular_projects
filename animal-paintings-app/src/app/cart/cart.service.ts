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
}

@Injectable({
  providedIn: 'root'
})
export class CartServiceImpl implements CartService {

  private apiUrl = `${environment.apiUrl}/cart`

  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product)
      .pipe(single())
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl)
      .pipe(single())
  }

  clearCart(): Observable<void> {
    return this.httpClient
      .delete<void>(this.apiUrl)
      .pipe(single())
  }
}
