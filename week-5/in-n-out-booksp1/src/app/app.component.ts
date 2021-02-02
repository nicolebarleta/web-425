/**
 * ============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date: 01 February 2021
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

  constructor() {
    this.assignment = 'Exercise 5.3 - Navigation and Layout'
  }

}
