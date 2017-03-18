import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import {AuthenticationService} from "./auth/authentication.service";
import {RegisterComponent} from './register/register.component';
import {AboutComponent} from './about/about.component';
import {routes} from './app.router';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
      AboutComponent,
      HomeComponent,
      SigninComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routes
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
