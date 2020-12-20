/*
============================================
; Title:  Exercise 1.3 - Angular CLI
; Author: Professor Krasso
; Date: 20 December 2020
; Modified By: Marie Nicole Barleta
; Description:  Angular CLI/ Hello World
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
