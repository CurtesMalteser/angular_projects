import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  #booksKey = "books"

  newBookTitle = ""
  newBookAuthor = ""

  books: Book[] = []

  ngOnInit(): void {
    this.books = this.#getBooks()
  }

  addBook() {
    if(this.#isValidTitle() && this.#isValidAuthor()) {

      const bookID = this.#stringToHash(
        this.newBookTitle.concat(this.newBookAuthor),
      )

      const newBook = {
        id: bookID,
        title: this.newBookTitle,
        author: this.newBookAuthor,
      }

      this.books.push(newBook)

      this.#clearInputFields()
      this.#storeBooks()
    }
  }

  deleteBook(id: number) {
    const index = this.books.findIndex((book: Book) => book.id === id)
    if(index > -1) {
      this.books.splice(index, 1)
      this.#storeBooks()
    }
  }

  #isValidTitle(): boolean { return this.newBookTitle.trim().length > 0 }
  
  #isValidAuthor(): boolean { return this.newBookAuthor.trim().length > 0 }

  #clearInputFields(){
    this.newBookTitle = ""
    this.newBookAuthor = ""
  }

  #storeBooks() {
    localStorage.setItem(this.#booksKey, JSON.stringify(this.books))
  }

  #getBooks(): Book[] {
    const json = localStorage.getItem(this.#booksKey)
    return json ? JSON.parse(json) : []
  }

  #stringToHash(value: string) {

    let hash = 0;

    if (value.length == 0) return hash;

    for (let i = 0; i < value.length; i++) {
        const char = value.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
  }
}

