/*
 ============================================
; Title: book.interface.ts
; Author: Professor Krasso
; Date: 22 February 2021
; Modified By: Marie Nicole Barleta
; Description: Book interface
;===========================================
 */

 /* This is where book interface
  * IBook objects are declared
  *
  */
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;

}
