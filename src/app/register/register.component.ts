import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

@Component({
    selector: 'model-driven-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['Pat', Validators.required],
      lastName: ['Cataldo', Validators.required],
      phone: ['123456789', Validators.required],
      email: ['email@myhost.com', Validators.required],
      address: ['123 Goa Way', Validators.required],
      zip: ['12345', Validators.required],
      city: ['MyCity', Validators.required],
      state: ['ST', Validators.required],
      company: ['Poshy Posher', Validators.required],
      website: ['www.myhost.com', Validators.required]

    });
  }
    form: FormGroup;
  fb: FormBuilder;
    firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);

    constructor(fb: FormBuilder,
                private router: Router,
                private http: Http) {
      this.fb = fb;
      this.router = router;
    }

  newTenant(data) {
    return this.http.post('http://localhost:3000/tenants', data)
      .map(function (response) {
        return response.json;
      })
      //...errors if any
      .catch(function (error) {
        return Observable.throw(error.json())
      });

  }
    // private userService: UserService,
    // private alertService: AlertService) { }

    onSubmit() {
      console.log("new registration form submitted");
      console.log(this.form.value);
      this.newTenant(this.form.value).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          this.router.navigate(['/home']);
        }
      );
    }

}
