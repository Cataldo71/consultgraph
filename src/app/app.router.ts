/**
 * Created by cataldp on 3/9/17.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component'
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AddcontactComponent} from './addcontact/addcontact.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'addcontact', component: AddcontactComponent},
  {path: 'contact-info', component: ContactInfoComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
