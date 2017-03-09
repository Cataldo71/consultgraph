import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
    selector: 'model-driven-form',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form: FormGroup;

    firstName = new FormControl("", Validators.required);

    constructor(fb: FormBuilder,
                private router: Router) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password": ["", Validators.required]
        });
    }

    // private userService: UserService,
    // private alertService: AlertService) { }

    onSubmit() {
        console.log("form submitted");
        console.log(this.form);
        this.router.navigate(['/about']);
    }

}
