/*
 ============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date: 14 February 2021
; Modified By: Marie Nicole Barleta
; Description: base layout component ts file
;===========================================
 */


import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {
  }
//This function will remove the session that it is on
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
