import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from '@angular/http';


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

  constructor(private router: Router, private http: Http) {

  }

  ngOnInit() {
    //this.contacts.push(new Contact('Pat Cataldo','248.252.2457', 'cataldo71@gmail.com', '123 Goa Way'));
    this.http.get('http://localhost:3000/contacts/1234/1234')
    // ...and calling .json() on the response to return data
      .map(function (response) {
        let clist = JSON.parse(response.json().toString()), contacts = [];
        clist.forEach(function (contact) {
          contacts.push(new Contact(contact.firstName + ' ' + contact.lastName, contact.phone, contact.email, contact.address));
        });
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

}
