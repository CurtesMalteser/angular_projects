import { Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, single, mergeMap, of, map } from 'rxjs';
import { Book } from '../models/book';
import { BooksResponse } from '../models/books-response';

export const BOOK_SERVICE = new InjectionToken<BookService>('book.service')

export interface BookService {
  getBooks(): Observable<BooksResponse>
  addBook(book: Book): Observable<Book>
  deleteBook(bookId: string): Observable<string>
}

@Injectable({
  providedIn: 'root'
})
export class BookServiceImpl implements BookService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<BooksResponse> {
    return this.httpClient.get<BooksResponse>(this.apiUrl + '/books')
      .pipe(single())
  }

  addBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<Book>(this.apiUrl + '/book', book, { headers: headers })
      .pipe(single())
  }

  deleteBook(bookId: string): Observable<string> {
    return this.httpClient.delete<string>(this.apiUrl + '/book/' + bookId)
      .pipe(
        mergeMap(() => of(bookId)),
        single()
      )
  }
}
