import {Component, OnInit} from '@angular/core';
import {ContactServiceService} from '../contact-service.service';
import {Contact} from '../contacts/contacts.component'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private css: ContactServiceService) {
  }

  contact: Contact;

  ngOnInit() {
    this.contact = this.css.currentContact;
  }

}
