/*
 ============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date: 08 February 2021
; Modified By: Marie Nicole Barleta
; Description: base layout ts file
;===========================================
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {
  }

}
