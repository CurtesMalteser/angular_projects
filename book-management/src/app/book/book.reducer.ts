import { createReducer, on } from "@ngrx/store";
import {
    AddBook,
    AddBookSuccess,
    AddBookFailure,
    RemoveBook,
    FetchBooks,
    FetchBooksSuccess,
    FetchBooksFailure,
    RemoveBookSuccess,
    RemoveBookFailure,
} from "./book.actions";
import { Book } from "../models/book";

export const initialState: Book[] = []

export const BookReducer = createReducer(
    initialState,
    on(FetchBooks, (state) => { return state }),
    on(FetchBooksSuccess, (state, { books }) => state.concat(books)),
    on(FetchBooksFailure, (state, { error }) => handleError(error, state)),
    on(AddBook, (state) => { return state }),
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => handleError(error, state)),
    on(RemoveBook, (state) => { return state }),
    on(RemoveBookSuccess, (state, { bookId }) => state.filter(book => book.id !== bookId)),
    on(RemoveBookFailure, (state, { error }) => handleError(error, state)),
)

function handleError(error: any, state: Book[]) {
    console.log(error)
    return state
}