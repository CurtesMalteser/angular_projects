import { Injectable, InjectionToken } from '@angular/core';

export const BOOK_SERVICE = new InjectionToken<BookService>('book.service')

export interface BookService {

}

@Injectable({
  providedIn: 'root'
})
export class BookServiceImpl implements BookService {

  constructor() { }
}
