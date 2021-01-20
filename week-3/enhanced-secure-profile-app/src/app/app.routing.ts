/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 18 January 2021
 * Modified by: Marie Nicole Barleta
 * Description: Routing file
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [SignInGuard]
    }
]
