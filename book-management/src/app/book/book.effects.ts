import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from "./book.actions";
import { BOOK_SERVICE, BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.AddBook),
        mergeMap((book) => this.bookService.addBook(book)
            .pipe(
                map(book => bookActions.AddBookSuccess(book)),
                catchError((error) => of(bookActions.AddBookFailure({ error })))
            )
        )
    ))

    fetchBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.FetchBooks),
        mergeMap(() => this.bookService.getBooks()
            .pipe(
                map(response => bookActions.FetchBooksSuccess({ response })),
                catchError((error) => of(bookActions.FetchBooksFailure({ error })))
            )
        )
    ))

    removeBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.RemoveBook),
        mergeMap((book) => this.bookService.deleteBook(book.bookId)
            .pipe(
                map((bookId) => bookActions.RemoveBookSuccess({ bookId })),
                catchError((error) => of(bookActions.RemoveBookFailure({ error })))
            )
        )

    ))

    constructor(
        private actions$: Actions,
        @Inject(BOOK_SERVICE) private bookService: BookService,
    ) { }
}