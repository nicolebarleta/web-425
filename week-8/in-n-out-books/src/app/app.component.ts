/**
 * ============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date: 22 February 2021
; Modified By: Marie Nicole Barleta
; Description: App component
;===========================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

//Assignment value

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }

}
