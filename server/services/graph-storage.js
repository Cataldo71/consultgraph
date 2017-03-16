'use strict';


let dse = require('dse-driver'),
  dseGraph = require('dse-graph'),
  logger = require('logger');

const client = new dse.Client({
    contactPoints: ['127.0.0.1'],
    profiles: [
      new dse.ExecutionProfile('default', {graphOptions: {name: 'consultgraph'}}),
      dseGraph.createExecutionProfile('explicit-exec', {graphOptions: {name: 'consultgraph'}})
    ]
  }
);

module.exports = {
  addTenant: function addVertexFunction(tenantData, ownerData) {
    return new Promise(function (resolve, reject) {
      // Add the new tenant node
      //
      const g = dseGraph.traversalSource(client);

      // Add the new owner as a consultant node
      //

      // connect the new owner as both owner and consultant
      //
      g.addV("TENANT").property("tenantId", "1", "company", 'The Posh Pachyderm', 'create', new Date()).toList(function (err, data) {
        if (err)
          reject(err);
        else {
          logger.info('Tenant: ' + tenantData.name + ' subgraph added with owner ' + ownerData.email + ' as owner.');
          resolve(data);
        }
      });
    });
  }
};

