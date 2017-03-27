'use strict';


let dse = require('dse-driver'),
  dseGraph = require('dse-graph'),
  logger = require('./logger');

const client = new dse.Client({
    contactPoints: ['127.0.0.1'],
    profiles: [
      new dse.ExecutionProfile('default', {graphOptions: {name: 'consultgraph'}}),
      dseGraph.createExecutionProfile('explicit-exec', {graphOptions: {name: 'consultgraph'}})
    ]
  }
);

module.exports = {
  addTenant: function addTenantVertex(tenantData, ownerData) {
    return new Promise(function (resolve, reject) {
      // Add the new tenant node
      //

      // Add the new owner as a consultant node
      //

      // connect the new owner as both owner and consultant
      //
      const query =
        "tenant = graph.addVertex(label,'TENANT','tenantId'," + tenantData.tenantId + ",'company','" + tenantData.tenantName + "', 'created',System.currentTimeMillis());" +
        "owner = graph.addVertex(label,'CONSULTANT', 'fname','" + ownerData.firstName + "','lname','" + ownerData.lastName +
        "','address','" + ownerData.address +
        "', 'state','" + ownerData.state +
        "', 'zip'," + ownerData.zip +
        ", 'email','" + ownerData.email +
        "','phone'," + ownerData.phone +
        ",'created',System.currentTimeMillis());" +
        "tenant.addEdge('E_OWNER',owner);" +
        "tenant.addEdge('E_CONSULTS',owner);";

      client.executeGraph(query).then(function (results) {
        logger.info('New Tenant created'); // todo: add tenant info
        resolve(results);
      }).catch(function (err) {
        logger.error(err);
        reject(err);
      });
    });
  },
  getAllContacts: function getContactsForTenant(tenant, consultant) {
    return new Promise(function (resolve, reject) {
      const query = "g.V().has('tenantId','" + tenant + "').out('E_CONSULTS').has('consultantId','" + consultant + "').out('E_CUSTOMER')";
      let res = [];
      client.executeGraph(query).then(function (results) {
        results.forEach(function (vertex) {
          // 'created','fname','lname', 'address', 'zip','state','city','geolocation','phone','email','twitter','facebook','pintrest'
          let fname = vertex.properties.fname[0] ? vertex.properties.fname[0].value : '',
            lname = vertex.properties.lname[0] ? vertex.properties.lname[0].value : '',
            address = vertex.properties.address[0] ? vertex.properties.address[0].value : '',
            phone = vertex.properties.phone[0] ? vertex.properties.phone[0].value : '',
            email = vertex.properties.email[0] ? vertex.properties.email[0].value : '';
          res.push({firstName: fname, lastName: lname, address: address, phone: phone, email: email});
        });
        resolve(res);
      }).catch(function (err) {
        logger.error(err);
        reject(err);
      })
    });
  },
  addContact: function addContactVertex(tenantId, consultantId, contactData) {
    return new Promise(function (resolve, reject) {

      // Do it all in one query and handle the errors
      //
      const query =
        "consultant = g.V().has('tenantId',tenantId).out('E_CONSULTS').has('consultantId',consultantId).next();" +
        "newCustomer = graph.addVertex(label,'CONTACT','fname',firstName, 'lname',lastName, 'address',address,'state',state,'zip',zip," +
        "'email',email, 'phone', phone, 'created', System.currentTimeMillis());" +
        "consultant.addEdge('E_CUSTOMER',newCustomer);";

      client.executeGraph(query, {
        tenantId: tenantId,
        consultantId: consultantId,
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        address: contactData.address,
        state: contactData.state,
        zip: contactData.zip,
        email: contactData.email,
        phone: contactData.phone
      }).then(function (results) {
        logger.info('New customer created'); // todo: add more info
        resolve(results);
      }).catch(function (err) {
        logger.error(err);
        reject(err);
      });
    });
  },

};

