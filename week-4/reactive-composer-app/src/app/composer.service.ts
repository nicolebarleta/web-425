/**
; Title:  Exercise 4.2 – Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 25 January 2021
; Modified By: Marie Nicole Barleta
; Description: Service class for Composer objects
;===========================================
*/


import { Injectable } from '@angular/core';
//import statement to be able to access IComposer
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
//These are the declared constructor objects that will be retrieved throughout the application

// IComposer variables is declared in composer.interface.ts
  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 104, fullName: "Joseph Haydn", genre: "Classical"}
    ]
  }
 // These functions will return the composers array above
  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
