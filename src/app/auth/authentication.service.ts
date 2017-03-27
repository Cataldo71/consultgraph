import {Injectable} from '@angular/core';
import {User} from './user';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
    // todo: remove this once oauth is hooked up
    this.isLoggedIn = false;
  }

  currentUser: User;
  isLoggedIn: boolean;

  signIn(): AuthenticationService {
    // sign in via auth0

    // todo: real user + token from oauth callback.
    //
    let user = {
      fname: 'Pat',
      lname: 'Cataldo',
      email: 'cataldo71@gmail.com',
      token: '123',
      id: '1234',
      tenantId: '1234'
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.isLoggedIn = true;
    this.currentUser = new User('cataldo71@gmail.com', 'Pat', 'Cataldo', '1234', '1234', '123');

    return this;
  }

  tenant() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.tenantId)
      return null; // not logged in or invalid

    return user.tenantId;

  }

  consultant() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.id)
      return null; // not logged in or invalid

    return user.id;
  }

  signInStatus() {
    return localStorage.getItem('currentUser') ? true : false;
  }

  signOut(): AuthenticationService {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    return this;
  }

  registerNewAccount(User): AuthenticationService {
    // call into the server to provision the new tenant

    // redirect to the login page

    return this;
  }

}
