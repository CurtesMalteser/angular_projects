import { Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, single } from 'rxjs';
import { Book } from '../models/book';

export const BOOK_SERVICE = new InjectionToken<BookService>('book.service')

export interface BookService {
  getBooks(): Observable<Book[]>
}

@Injectable({
  providedIn: 'root'
})
export class BookServiceImpl implements BookService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl + '/books')
      .pipe(single())
  }
}
