import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook = createAction('[Book] Add Book', props<Book>())
export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>())
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error: any}>())


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>())

export const FetchBooks = createAction('[Book] Fetch Books')
export const FetchBooksSuccess = createAction('[Book] Added Book Successfully', props<{books: Book[]}>())
export const FetchBooksFailure = createAction('[Book] Add Book Failure', props<{error: any}>())
