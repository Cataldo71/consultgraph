import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ContactServiceService} from '../contact-service.service';
import {AuthenticationService} from '../auth/authentication.service';
import {environment} from "../../environments/environment";


export class Contact {

  descr = this.name + ' ' + this.phone;

  constructor(public name: string, public phone: string, public email: string, public address: string) {
  }
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Array<Contact> = [];
  listWatcher: Observable<Array<Contact>>;

  constructor(private router: Router, private http: Http, private css: ContactServiceService) {
    this.contactService = css;
  }

  private contactService: ContactServiceService;
  ngOnInit() {
    // Initialize the component with the list of contacts for the logged in user/tenant
    //
    let contacts = [], css = this.contactService;

    this.http.get(environment.baseGraphUrl + '/contacts/1234/1234')
      .map(function (response) {
        let clist = JSON.parse(response.json().toString());
        clist.forEach(function (contact) {
          contacts.push(new Contact(contact.firstName + ' ' + contact.lastName, contact.phone, contact.email, contact.address));
        });
        contacts = contacts.sort((c1, c2) => {
          if (c1.lastName < c2.lastName)
            return -1;
          if (c1.lastName > c2.lastName)
            return 1;
          return 0;
        });
        css.publishContacts(contacts);

        return contacts;

      })
      //...errors if any
      .catch(function (error) {
        return Observable.throw('server error')
      }).subscribe(c => this.contacts = c);

  }

  addContact(name, phone, email, address) {
    this.router.navigate(['/addcontact']);
  }

  goToContact(contact) {
    this.contactService.setCurrentContact(contact);
    this.router.navigate(['/contact-info']);
  }

}
