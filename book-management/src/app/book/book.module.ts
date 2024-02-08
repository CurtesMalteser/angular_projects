import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BOOK_SERVICE, BookServiceImpl } from './book.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookListComponent } from '../book-list/book-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    BookListComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltip,
  ],
  providers: [{ provide: BOOK_SERVICE, useClass: BookServiceImpl }]
})
export class BookModule { }
