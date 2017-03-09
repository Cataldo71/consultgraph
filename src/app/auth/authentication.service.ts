import { Injectable } from '@angular/core';
import { User } from './user';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
    // todo: remove this once oauth is hooked up
    this.isLoggedIn = false;
  }
  currentUser : User;
  isLoggedIn : boolean;

  signIn() : AuthenticationService {
      // sign in via auth0

      // todo: real user + token from oauth callback.
      //
      let user = {fname:'Pat', lname:'Cataldo', email:'cataldo71@gmail.com', token:'123'};
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.isLoggedIn = true;
      this.currentUser = new User('cataldo71@gmail.com', 'Pat', 'Cataldo');

      return this;
  }
  signOut() : AuthenticationService {
      localStorage.removeItem('currentUser');
    return this;
  }
  registerNewAccount(User) : AuthenticationService {
    // call into the server to provision the new tenant

    // redirect to the login page

    return this;
  }

}
