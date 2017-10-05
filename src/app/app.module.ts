import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import {AuthenticationService} from "./auth/authentication.service";
import {ContactServiceService} from './contact-service.service';
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {routes} from './app.router';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AddcontactComponent} from './addcontact/addcontact.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
      AboutComponent,
      HomeComponent,
      SigninComponent,
      ContactsComponent,
      AddcontactComponent,
      ContactInfoComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routes
    ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AuthenticationService, ContactServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
