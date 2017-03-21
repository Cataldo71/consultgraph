import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

@Component({
  selector: 'model-driven-formact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private http: Http) {
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
    return this.http.post('http://localhost:3000/contacts', data)
    // ...and calling .json() on the response to return data
      .map(function (response) {
        return response.json;
      })
      //...errors if any
      .catch(function (error) {
        return Observable.throw(error.json().error || 'server error')
      }).subscribe();

  }

  onSubmit() {
    console.log("new registration form submitted");
    console.log(this.addContactForm.value);
    // create the new user
    //
    this.newContact(this.addContactForm.value);
    this.router.navigate(['/contacts']);
  }
}
