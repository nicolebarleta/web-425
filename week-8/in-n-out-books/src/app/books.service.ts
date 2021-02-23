/**
 * ============================================
; Title:  book.service.ts
; Author: Professor Krasso
; Date: 22 February 2021
; Modified By: Marie Nicole Barleta
; Description: Service class for book objects
;===========================================
 */


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**These are the isbns that will be used throughout the application
 * it is retrieved to get the details from the Open Library and it is used
 * to get the information of each book with each respective isbn.
 * I chose ISBN_13 which is the paperback version of each book.
*/
export class BooksService {
  isbns: Array<string> = [

    '9781942788003',
    '9780596805524',
    '9781491954461',

    '9780517200810',
    '9780399588631',
    '9780879736736',

    '9780385491747',
    '9780671708634',
    '9781440573637'


  ];

  constructor(private http: HttpClient) {  }
/**
 * This function will get all the necessary elements of each books detail
 * from the OpenLibrary. org, The ISBN will be formatted as a JSON format
 * and will get all the details and will be returned as parameters.
 */
  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
