/**
; Title:  Exercise 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Marie Nicole Barleta
; Description: Composer-list component
*/


import { Component, OnInit } from '@angular/core';
/** Composer class with two fields */
export default class Composer {
  fullName: string;
  genre: string;
/** Constructor that accepts two parameters */
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  /**  Composers variable is declared with an Array of <Composer> */
  composers: Array<Composer>;

  /** Components constructors with a new array
   * with 5 new different objects
  */

  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
