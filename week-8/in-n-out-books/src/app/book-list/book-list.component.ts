/*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date: 22 February 2021
; Modified By: Marie Nicole Barleta
; Description: Book-list component ts file
;===========================================

*/

//Imported for strong typing and editor tooling
import { Component, OnInit } from '@angular/core';
//Imported for the class of BookService to get the isbns arrays
import { BooksService } from '../books.service';
//Imported to detect declared IBook variables
import { IBook } from '../book.interface';
//Imported for matdialog angular material for the dialog tool
import { MatDialog } from '@angular/material/dialog';
//Imported for the details of each book to show in a dialog and the matcard
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

//Declaration of the components of this file
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
//The declared variables for books Array and book to connect to IBook
  books: Array<IBook> = [];
  book: IBook;
/**
 *
 * @param booksService
 * @param dialog
 * This is where the dialogs data retrieved from.
 * The getBooks function from books.service.ts is looping over
 * the returned values from the openlibrary.org,
 * the author's name are taken from the key that is retrieved from the isbn of the book.
 */
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
/**
 * The array key is compared and pushed
 * to the details in an isbn_13 or isbn_10 format,
 * the description and authors, the description field will show
 * N/A if there is no available description from the Open Library and
 * the rest will be blank if the details are not available in the Open Library.
 */

          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void { }
/**
 *
 * @param isbn
 * This function will show the details of each book
 * in a dialog form and will be closed if
 * the user sent a confirm message
 */
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);

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
