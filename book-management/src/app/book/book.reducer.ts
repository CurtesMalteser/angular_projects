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
import { BooksResponse } from "../models/books-response";

export const initialState: BooksResponse = {
    books: [],
    page: 1,
    page_size: 8,
    total_results: 0
}

export const BookReducer = createReducer(
    initialState,
    on(FetchBooks, (state) => { return state }),
    on(FetchBooksSuccess, (state, { response }) => {
        state = response
        return state

    }),
    on(FetchBooksFailure, (state, { error }) => handleError(error, state)),
    on(AddBook, (state) => { return state }),
    on(AddBookSuccess, (state, { id, title, author, rating }) => {
        let books = state.books
        state.books = [...books , { id, title, author, rating }]
        return state
    }),
    on(AddBookFailure, (state, { error }) => handleError(error, state)),
    on(RemoveBook, (state) => { return state }),
    on(RemoveBookSuccess, (state, { bookId }) => {
        state.books = state.books.filter(book => book.id !== bookId)
        return state
    }),
    on(RemoveBookFailure, (state, { error }) => handleError(error, state)),
)

function handleError(error: any, state: BooksResponse) {
    console.log(error)
    return state
}