/**
 * Created by cataldp on 3/9/17.
 */
let express = require('express'),
  router = express.Router(),
  tenantService = require('../services/tenantservice'),
  logger = require('../services/logger');

/* GET users listing. */
router.post('/', function (req, res) {

    // call the backend service to create the new tenant in the db.

  // put the new user and tenant in the graph
  //
  let data = req.body;

  tenantService.createNewTenant(data.company, data.firstName, data.lastName,
    data.address, data.state, data.zip, data.email, data.phone)
    .then(function (result) {
      res.status(201).send(result);
    }).catch(function (err) {
    logger.error(err);
    res.status(500).send('rut ro raggy');
  });
  //res.send('respond with a resource');

});

module.exports = router;
