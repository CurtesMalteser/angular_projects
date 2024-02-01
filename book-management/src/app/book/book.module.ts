import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOK_SERVICE, BookServiceImpl } from './book.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: BOOK_SERVICE, useClass: BookServiceImpl}]
})
export class BookModule { }
