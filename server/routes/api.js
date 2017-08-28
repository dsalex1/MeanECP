/**
 * this is the API management file
 * it delegates the implementation for '/JSON' further to 'JSONApi'
 * and delegates the implementation for '/config' further to 'ConfigApi'.
 * On root path a message is shown that the API works
 *
 * @summary   API management
 *
 */

//basic imports
const express = require('express');
const router = express.Router();

const JSONApi = require('./JSON/api.JSON');
const ConfigApi = require('./config/api.config');

router.use('/JSON', JSONApi);
router.use('/config', ConfigApi);

router.get('/', (req, res) => {
  res.send('API works <br/>204 - No Content');
});

module.exports = router;