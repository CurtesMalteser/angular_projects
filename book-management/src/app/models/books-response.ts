import { Book } from "./book";

export interface BooksResponse {
    books: Book[],
    page: number,
    total_pages: number,
    total_results: number,
}
