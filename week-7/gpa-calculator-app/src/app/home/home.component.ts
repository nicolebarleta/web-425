/*
 ============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date: 08 February 2021
; Modified By: Marie Nicole Barleta
; Description: home component ts file
;===========================================
 */

import { Component, OnInit } from '@angular/core';
//Itranscript is imported from the transcript interface ts file
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  //The grades in letter form is declared here for the selection
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;;
  transcriptForm: FormGroup;

/**
 * This makes the form be more flexible using Reactive form,
 * values from the form will be pushed as a new object literal to the
 * transcriptEntries array. Lastly, the current target have a reset event
 * so it can be reset whenever the event is called.
 */

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  get form() { return this.transcriptForm.controls; }

  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    event.currentTarget.reset();
  }

/**
 * This is the calculated results function
 * it will loop over the cases that is chosen and will
 * get the respective gpa value of each entry.
 */
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('its an a')
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
/**
 * The gpa is looping over the entry.grade(which is user input),
 * each entry will be added and will go to gpa variable.
 * The gpaTotal is the overall sum of the gpa entered and
 *  will be divided into the length of the number of entries.
 * */
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }
//Function will clear all entries
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
