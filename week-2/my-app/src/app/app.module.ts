/**
; Title:  Exercise 2.2 - Navigating
; Author: Professor Krasso
; Date: 01 January 2021
; Modified By: Marie Nicole Barleta
; Description:  Navigation is the most important part of any website
; This is an example of a navigation in Angular
; This module will show the components
;===========================================
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
