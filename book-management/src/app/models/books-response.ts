import { Book } from "./book";

export interface BooksResponse {
    books: Book[],
    page: number,
    page_size: number,
    total_results: number,
}
