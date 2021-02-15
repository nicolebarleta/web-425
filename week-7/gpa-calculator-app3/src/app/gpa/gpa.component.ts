/*
 ============================================
; Title:  gpa.component.spec.ts
; Author: Professor Krasso
; Date: 08 February 2021
; Modified By: Marie Nicole Barleta
; Description: gpa component ts file
;===========================================
 */


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  // Input statement for gpaTotal
  @Input() gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
