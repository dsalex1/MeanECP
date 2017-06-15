const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');
var fs = require('fs');

/* GET api listing. */
router.post('/ClientConfig', (req, res) => {
  var change = req.body;
  var config = JSON.parse(JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ServerConfig.json'), 'utf8')));
  res.send("change: " + JSON.stringify(change) + " config:" + JSON.stringify(change))
});

router.get('/ServerConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServerConfig.json'));
});

router.get('/KeyCodeConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'KeyCodeConfig.json'));
});

module.exports = router;