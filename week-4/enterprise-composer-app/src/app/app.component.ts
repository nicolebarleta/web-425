/**
; Title:  Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 11 January 2021
; Modified By: Marie Nicole Barleta
; Description: App component
;
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The string assignment goes here, This show in every page
  assignment: string = 'Assignment 4.4 - Async Pipe';
}
