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
      let newBook = {
        id: (this.books.length + 1),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      }

      this.books.push(newBook)

      this.#clearInputFields()
      this.#storeBooks()
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)
    this.#storeBooks()
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

}

