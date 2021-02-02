/**
 * ============================================
; Title:  book-details-dialog.component.ts
; Author: Professor Krasso
; Date: 01 February 2021
; Modified By: Marie Nicole Barleta
; Description: Book details dialog component
;===========================================
 */


import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }
}
