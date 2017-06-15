const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');
var fs = require('fs');

const JSONApi = require('./JSON/api.JSON');
const ConfigApi = require('./config/api.config');

// Set our JSON routes
router.use('/JSON', JSONApi);
router.use('/config', ConfigApi);

router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;