/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date: 01 February 2021
; Modified By: Marie Nicole Barleta
; Description: Book-list component ts file
;===========================================

*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book!: IBook | null;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }


//This function will show the book details through in a dialog box
//Each ISBN link will correspond to its own book detail

showBookDetails(isbn: string) {
  this.book = this.booksService.getBook(isbn);

  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: {
      book: this.book
    },
    disableClose: true,
    width: '800px'
  })

  console.log(this.book);

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      this.book = null;
    }
  });
}
}
