/**
;===========================================
; Title:  Exercise 2.2 - Navigating
; Author: Professor Krasso
; Date: 01 January 2021
; Modified By: Marie Nicole Barleta
; Description:  Navigation is the most important part of any website
; This is an example of a navigation in Angular
; This routing file is added during the installation of this app
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// This block of code will go to home, contact and about once the link is clicked.

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    //http://localhost:4200/home
    path: 'home',
    component: HomeComponent
  },
  {
    //http://localhost:4200/contact
    path: 'contact',
    component: ContactComponent
  },
  {
    //http://localhost:4200/about
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
