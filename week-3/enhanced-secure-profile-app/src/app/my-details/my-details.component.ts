/**
 * Title: my-details.component.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
 * Modified by: Marie Nicole Barleta
 * Description: My details component
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;

  // this is where keywords are declared
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;
// this is where the details from the Person is declared
  constructor() {
    this.myProfile = new Person("Marie Nicole Barleta", "Filipino Food", "Red and Black");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
