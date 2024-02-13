import { Book } from "./models/book";
import { BooksResponse } from "./models/books-response";

export interface AppState {
    readonly response: BooksResponse
}
