/**
; Title:  Exercise 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Marie Nicole Barleta
; Description: Composer class where constructors are populated
; with the declared composers array
;===========================================
*/

//These are the declared constructor objects that will be retrieved throughout the application

// IComposer variables is declared in composer.interface.ts
import { IComposer } from './composer.interface';
export class Composer {
  composers: Array<IComposer>;
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      },

    ]
  }
  // This function will return the composers array above
  getComposers(){
    return this.composers;
  }

  /*
  ; Looping over the composer array and will return the object
  ; that is equal to the passed-in composerId values
  */

  getComposer(composerId: number){
    for(let composer of this.composers){
      if(composer.composerId === composerId){
          return composer;
      }
    }
  }
}
