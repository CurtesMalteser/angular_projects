import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, FetchBooks, RemoveBook } from '../book/book.actions';
import { AppState } from '../app.state';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>
 
  ratingControl = new FormControl<number | null>(null, Validators.required);

  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'))
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
