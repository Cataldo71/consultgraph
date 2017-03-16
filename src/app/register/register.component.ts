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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      company: ['', Validators.required],
      website: ['', Validators.required]

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

  newTenant() {
    return this.http.post('http://localhost:3000/tenants', '')
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }
    // private userService: UserService,
    // private alertService: AlertService) { }

    onSubmit() {
      console.log("new registration form submitted");
      console.log(this.form.controls);
      console.log(this.newTenant());
      //this.router.navigate(['/about']);
    }

}
