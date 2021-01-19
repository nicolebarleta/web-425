/**
; Title:  Exercise 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Marie Nicole Barleta
; Description: Composer-list component
*/


import { Component, OnInit } from '@angular/core';
//imported from composer.interface.ts file
import { IComposer } from '../composer.interface';
// imported from composer.class.ts file
import { Composer} from '../composer.class';
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Objects retrieved from composer.class.ts
  composers: Array<IComposer>;

  /** Components constructors with an array
   * with 5 new different objects
  */

  constructor() {
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}
