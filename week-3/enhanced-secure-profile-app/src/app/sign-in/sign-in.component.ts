/**
 * Title: sign-in.component.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
 * Modified by: Marie Nicole Barleta
 * Description: Sign-in component (sign-in page)
 */


 // This is where the isLoggedIn is retrieved from the sign-in.guard.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
