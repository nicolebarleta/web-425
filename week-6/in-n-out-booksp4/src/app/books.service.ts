/**
 * ============================================
; Title:  book.service.ts
; Author: Professor Krasso
; Date: 01 February 2021
; Modified By: Marie Nicole Barleta
; Description: Service class for book objects
;===========================================
 */


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

// Declared books constructor

  constructor() {
    this.books = [
      {
        isbn: '9781942788003',
        title: 'The DevOps Handbook',
        description: 'How to create world-class agility, reliability, & security in technology organizations',
        numOfPages: 655,
        authors: ['Kim, G., Debois', 'P., Willis', 'J., Humble, J.', 'Allspaw, J.']
      },
      {
        isbn: '9781617295348',
        title: 'Angular Development with Typescript',
        description: "Angular applications can be developed in JavaScript, using TypeScript is a lot more productive.",
        numOfPages: 531,
        authors: ['Fain, Y.', 'Moiseev, A.']
      },
      {
        isbn: '9781491954461',
        title: 'MongoDB: The Definitive Guide',
        description: "Powerful and Scalable Data Storage",
        numOfPages: 774,
        authors: ['Shannon Bradshaw', 'Eoin Brazil', 'Kristina Chodorow']
      },
      {
        isbn: '9781617294754',
        title: 'Getting MEAN with Mongo, Express, Angular, and Node',
        description: "The MEAN stack—MongoDB, Express, Angular, and Node—uses JavaScript end to end, maximizing developer productivity and minimizing context switching.",
        numOfPages: 575,
        authors: ['Simon D. Holmes', 'Clive Harber']
      },
      {
        isbn: '9780593099322',
        title: 'NoSQL Distilled',
        description: "A Brief Guide to the Emerging World of Polyglot Persistence",
        numOfPages: 153,
        authors: ['Pramod J. Sadalage', 'Martin Fowler']
      }
    ]
  }

// Returns books array to an observable
  getBooks(): Observable<IBook[]> {
    return of(this.books);

  }
// Looping over the array of books and returns a book matching the passed-in isbn number
  getBook(isbn: string): IBook | any {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
