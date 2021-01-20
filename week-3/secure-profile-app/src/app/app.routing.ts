/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 19 January 2021
 * Modified by: Marie Nicole Barleta
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]
