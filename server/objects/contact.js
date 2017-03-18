'use strict';

// Contact can be either a customer/lead or a consultant.
//

export default class Contact {
  constructor(fname, lname, addr, state, zip, email, phone) {
    this.fname = fname;
    this.lname = lname;
    this.addr = addr;
    this.state = state;
    this.zip = zip;
    this.email = email;
    this.phone = phone;
  }
}
