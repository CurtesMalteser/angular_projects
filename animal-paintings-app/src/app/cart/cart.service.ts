import { Injectable, InjectionToken } from '@angular/core';

export const CART_SERVICE = new InjectionToken<CartService>('cart.service');

export interface CartService {

}

@Injectable({
  providedIn: 'root'
})
export class CartServiceImpl implements CartService {

  constructor() { }
}
