/**
; Title:  composer.service.ts
; Author: Professor Krasso
; Date: 25 January 2021
; Modified By: Marie Nicole Barleta
; Description: Service class for Composer objects
; The composers are returned as observables array
;===========================================
*/


import { Injectable } from '@angular/core';
//import statement to be able to access IComposer
import { IComposer } from './composer.interface';
//import statement to be able to access observable from rxjs
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import statement of map operator
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
/*
; These are the declared constructor objects that will be retrieved throughout the application
; Composer variables is declared in composer.interface.ts
*/
  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 104, fullName: "Joseph Haydn", genre: "Classical"}
    ]
  }
/*
; The getComposers function with an observable array of IComposer objects
; and returning the observable array with this.composers
*/
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
/*
; This is where the composer will return from when
; the composerId is called which is through a number
*/
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
/*
; filterComposers function will go to pipe (to allow to chain multiple functions together)
; then map composers array of objects (to return the new array of objects)
; next is filtering composer's full name and turned into lowercase
; so all input can be detected and compared
; and calling from the indexOf name.
*/
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
