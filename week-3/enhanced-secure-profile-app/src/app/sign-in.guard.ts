/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 18 January 2021
 * Modified by: Marie Nicole Barleta
 * Description: CanActive function is used in this file
 * This is guarding the app from unauthorized users,
 * further authorization will be made at WEB 450 course
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn = next.queryParams.isLoggedIn;

  /* if isLoggedin returned true the user can access the index page
  * if false the user will go back to the sign-in page
  */
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
    return false;
    }
  }
}
