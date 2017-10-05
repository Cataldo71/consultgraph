import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./auth/authentication.service";
import {ContactServiceService} from './contact-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactServiceService]
})
export class AppComponent implements OnInit {

  constructor(public auth: AuthenticationService, public css: ContactServiceService) {
    this.auth = auth;
    this.css = css;
  }

  ngOnInit() {
  }
}
