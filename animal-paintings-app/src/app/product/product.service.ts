import { Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, single } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

export const PRODUCT_SERVICE = new InjectionToken<ProductService>('product.service');

export interface ProductService {
  getProducts(): Observable<Product[]>
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceImpl implements ProductService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient
    .get<Product[]>(this.apiUrl + '/products')
    .pipe(single())
  }

}
