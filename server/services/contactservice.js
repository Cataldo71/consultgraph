/**
 * Created by cataldp on 3/21/17.
 */
"use strict";

let graph = require('../services/graph-storage');


module.exports = {
  getAllContacts: function (tenantId, consultantId) {
    return new Promise(function (resolve, reject) {
      graph.getAllContacts(tenantId, consultantId).then(function (results) {
        resolve(results);
      }).catch(function (err) {
        reject(err);
      })

    });

  },
  addNewContact: function (tenantId, consultantId, contact) {
    return new Promise(function (resolve, reject) {
      let data = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        address: contact.address,
        state: contact.state,
        zip: contact.zip,
        email: contact.email,
        phone: contact.phone
      };

      graph.addContact(tenantId, consultantId, data).then(function (results) {
        resolve(results);
      }).catch(function (err) {
        reject(err);
      })
    });

  }
};
