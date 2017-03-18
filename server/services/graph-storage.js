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
  addTenant: function addVertexFunction(tenantData, ownerData) {
    return new Promise(function (resolve, reject) {
      // Add the new tenant node
      //
      const g = dseGraph.traversalSource(client);

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

      const results = client.executeGraph(query).then(function (results) {
        logger.info('New Tenant created'); // todo: add tenant info
        resolve(results);
      }).catch(function (err) {
        logger.error(err);
      });
      //const vertex  = results.first();

      // g.addV("TENANT")
      //   .property("tenantId", tenantData.tenantId)
      //   .property( "company", tenantData.tenantName)
      //   .property('created', tenantData.created)
      //   .toList(function (err, data) {
      //     if (err)
      //       reject(err);
      //     else {
      //       logger.info('Tenant: ' + tenantData.tenantName + ' subgraph added with owner ' + ownerData.email + ' as owner.');
      //       // phase 2
      //       // add the owner
      //       let tenant_v = data[0];
      //       g.addV('CONSULTANT')
      //         .property('fname', ownerData.firstName)
      //         .property('lname', ownerData.lastName)
      //         // .property('address', ownerData.address)
      //         // .property('state', ownerData.state)
      //         // .property('city', ownerData.city)
      //         // .property('phone', parseInt(ownerData.phone))
      //         .property('created', new Date())
      //         .property('email', ownerData.email).toList(function (err,data) {
      //           if(err)
      //             reject(err); // todo: need to roll back a transaction here.
      //           else {
      //             logger.info('Consultant ' + ownerData.email + ' added');
      //             //g.addEdge(tenant_v,data[0], 'OWNER').toList(function(err, data){
      //              tenant_v.addEdge('OWNER', data[0]).toList(function(err, data){
      //               if(err)
      //                 reject(err);
      //               else
      //                 g.addEdge(tenant_v, data[0],'E_CONSULTS').toList(function(){
      //                   if(err)
      //                     reject(err);
      //                   else
      //                     resolve(data);
      //                 });
      //             });
      //           }
      //         });
      //     }
      //   });
    });
  }
};

