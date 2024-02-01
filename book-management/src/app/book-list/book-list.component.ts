import { Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, FetchBooks, RemoveBook } from '../book/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>
 
  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'))
  }

  ngOnInit(): void {
    this.store.dispatch(FetchBooks())
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }))
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({ bookId }))
  }

}
