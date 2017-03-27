import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {AuthenticationService} from '../auth/authentication.service';

@Component({
  selector: 'model-driven-formact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: Http,
              private authService: AuthenticationService) {
  }

  addContactForm: FormGroup;

  ngOnInit() {
    this.addContactForm = this.fb.group({
      firstName: ['Tiffany', Validators.required],
      lastName: ['Cataldo', Validators.required],
      phone: ['123456789', Validators.required],
      email: ['tiffany@myhost.com', Validators.required],
      address: ['123 Goa Way', Validators.required],
      zip: ['12345', Validators.required],
      city: ['MyCity', Validators.required],
      state: ['ST', Validators.required]
    });
  }

  newContact(data) {
    let url = 'http://localhost:3000/contacts/' + this.authService.tenant() + '/' + this.authService.consultant();
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth': 1//this.authService.currentUser.token
    });

    return this.http.post(url, data, headers)
      .map(function (response: Response) {
        return response.json;
      })
      .catch(function (error) {
        return Observable.throw(error.json());
      });

  }

  onSubmit() {
    console.log("new registration form submitted");
    console.log(this.addContactForm.value);
    // create the new user
    //
    this.newContact(this.addContactForm.value).subscribe(
      data => {
      },
      error => {
        console.log(error.stack || error)
      },
      () => {
        this.router.navigate(['/contacts'])
      });
  }
}
