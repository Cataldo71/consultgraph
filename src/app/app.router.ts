/**
 * Created by cataldp on 3/9/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component'
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component'

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
