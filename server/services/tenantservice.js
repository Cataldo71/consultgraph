"use strict";

let graph = require('../services/graph-storage');


module.exports = {
  createNewTenant: function (t_name, fname, lname, addr, state, zip, email, phone) {
    return new Promise(function (resolve, reject) {
      let owner = {firstName: fname, lastName: lname, address: addr, state: state, zip: zip, email: email, phone: phone}

      // Assume that we called our Auth service to set up the new user + tenant info
      //
      let tenant = {tenantId: 1, tenantName: t_name, created: new Date()};

      // call the graph to create the new tenant subgraph
      //
      graph.addTenant(tenant, owner).then(function (data) {
        resolve(data); // todo: process data
      }).catch(function (err) {
        reject(err);
      });
    });
  }
};

