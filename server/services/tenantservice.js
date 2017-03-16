"use strict";

let graph = require('../services/graph-storage');

module.exports = {
  createNewTenant: function (t_name, fname, lname, addr, state, zip, email, phone) {
    return new Promise(function (resolve, reject) {
      let owner = new Contact(fname, lname, addr, state, zip, email, phone);

      // Assume that we called our Auth service to set up the new user + tenant info
      //
      let tenant = new Tenant(1, t_name, new Date());

      // call the graph to create the new tenant subgraph
      //
      graph.addTenant(tenant, owner).then(function (data) {
        resolve(data); // todo: process data
      }).catch(function (err) {
        Console.log(err);
      });
    });
  }
};

