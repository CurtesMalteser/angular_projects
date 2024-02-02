import { Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of, single } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCT_SERVICE, ProductService } from './product.service';

@Injectable()
export class MockProductService implements ProductService {


  getProducts(): Observable<Product[]> {
    return of([])
  }

}

export const PRODUCT_SERVICE_PROVIDER = [ { provide: PRODUCT_SERVICE, useClass: MockProductService } ];