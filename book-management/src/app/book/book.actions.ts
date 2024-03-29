import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";
import { BooksResponse } from "../models/books-response";
import { Paginator } from "../models/paginator";

export const AddBook = createAction('[Book] Add Book', props<Book>())
export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>())
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error: any}>())

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>())
export const RemoveBookSuccess = createAction('[Book] Remove Book Successfully', props<{bookId: string}>())
export const RemoveBookFailure = createAction('[Book] Remove Book Failure', props<{error: any}>())

export const FetchBooks = createAction('[Book] Fetch Books', props<Paginator>())
export const FetchBooksSuccess = createAction('[Book] Fetched Books Successfully', props<{response: BooksResponse}>())
export const FetchBooksFailure = createAction('[Book] Fetch Books Failure', props<{error: any}>())
