/**
; Title:  app.module.ts
; Author: Professor Krasso
; Date: 25 January 2021
; Modified By: Marie Nicole Barleta
; Description: App module
;
;===========================================
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * This is where all the components of this app is declared
 */
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ComposerListComponent,
    ComposerDetailsComponent
  ],

/**
 * In this case we used AppRoutingModule for navigation purposes
 */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
