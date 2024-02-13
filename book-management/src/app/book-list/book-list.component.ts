import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, FetchBooks, RemoveBook } from '../book/book.actions';
import { AppState } from '../app.state';
import { FormControl, Validators } from '@angular/forms';
import { Paginator } from '../models/paginator';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>
  pageEvent$ = new BehaviorSubject<PageEvent>({
    pageIndex: 0,
    length: 1,
    pageSize: 8,
  });

  ratingControl = new FormControl<number | null>(null, Validators.required);

  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('response'))
      .pipe(
        tap((response) => {
          const index = response.page - 1
          this.pageEvent$.next({
            pageIndex: index,
            length: response.total_results,
            pageSize: response.page_size,
          })
        }),
        map((response) => response.books)
      )
  }

  ngOnInit(): void {
    const event = this.pageEvent$.value
    this.fetchBooks(event)
  }

  addBook(id: string, title: string, author: string, rating: number) {
    this.store.dispatch(AddBook({ id, title, author, rating }))
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }))
  }

  handlePageEvent(event: PageEvent) { this.fetchBooks(event) }

  private fetchBooks(e: PageEvent) {
    this.store.dispatch(FetchBooks({
      page: e.pageIndex + 1,
      total_pages: e.length,
      page_size: e.pageSize,
    }))
  }
}
