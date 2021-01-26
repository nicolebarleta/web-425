/**
; Title: composer-list.component.ts
; Author: Professor Krasso
; Date: 25 January 2021
; Modified By: Marie Nicole Barleta
; Description: Composer-list component
; Displays the lists of composers
*/


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

//Observable is declared with IComposer array

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    /*
    ; Whenever the user input a text in the search form
    ; after 500 milliseconds the table view value will change
    */
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

   /*
    ; This function will get the filterComposers function from composer.service.ts,
    ; the function allowed the view of composers observables to piped, map and filtered.
    ; In this case
    */

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
