import {Injectable} from '@angular/core';
import {Contact} from './contacts/contacts.component';

@Injectable()
export class ContactServiceService {

  constructor() {
  }

  contacts: Array<Contact>;
  currentContact: Contact;

  publishContacts(c: Array<Contact>) {
    this.contacts = c;
  }

  setCurrentContact(contact) {
    this.currentContact = contact;
  }

}
