import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {AuthenticationService} from '../auth/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(fb: FormBuilder,
              private router: Router,
              private http: Http,
              private auth: AuthenticationService) {
    this.fb = fb;
    this.router = router;
  }

  signinform: FormGroup;
  fb: FormBuilder;

  ngOnInit() {
    this.signinform = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      remember: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log("Sign In form submitted");
    console.log(this.signinform.value);
    this.auth.signIn();
    this.router.navigate(['/home']);
  }
}
