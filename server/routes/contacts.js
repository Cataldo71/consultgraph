"use strict";

let express = require('express'),
  router = express.Router(),
  contactService = require('../services/contactservice');


/* GET contact listing. */
router.post('/:tenantId/', function (req, res, next) {
  // todo: this will need to support pagination
  //
  let newContact = req.body,
    tenant = req.params.tenantId,
    consultantId = req.params.consultantId;
});

router.get('/:tenantId/:consultantId', function (req, res, next) {
  let tenant = req.params.tenantId,
    consultantId = req.params.consultantId;

  contactService.getAllContacts(tenant, consultantId).then(function (results) {
    res.json(JSON.stringify(results));
  })
    .catch(function (err) {
      res.status(500).send(err);
    })
})
module.exports = router;
