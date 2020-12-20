/*
============================================
; Title:  Exercise 1.3 - Angular CLI
; Author: Professor Krasso
; Date: 20 December 2020
; Modified By: Marie Nicole Barleta
; Description:  Angular CLI/ Hello World
;===========================================
*/



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Nicole Barleta's world!"

}
