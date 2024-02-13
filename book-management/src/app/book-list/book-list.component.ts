import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, FetchBooks, RemoveBook } from '../book/book.actions';
import { AppState } from '../app.state';
import { FormControl, Validators } from '@angular/forms';
import { Paginator } from '../models/paginator';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>
  paginator$ = new BehaviorSubject<Paginator>({
    page: 1,
    total_pages: 1,
    total_results: 1,
    page_size: 1,
  });

  ratingControl = new FormControl<number | null>(null, Validators.required);

  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('response'))
      .pipe(
        tap((response) => this.paginator$.next({
          page: response.page,
          total_pages: response.total_pages,
          total_results: response.total_results,
          page_size: response.books.length,
        })),
        map((response) => response.books)
      )
  }

  ngOnInit(): void {
    this.store.dispatch(FetchBooks())
  }

  addBook(id: string, title: string, author: string, rating: number) {
    this.store.dispatch(AddBook({ id, title, author, rating }))
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }))
  }

}
