const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');
var fs = require('fs');

/* GET api listing. */
router.post('/Client', (req, res) => {
  var change = req.body;
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), 'utf8'));
  Object.assign(config, change)
  res.send(JSON.stringify(change) + "<br/> => <br/>" + JSON.stringify(config))
  fs.writeFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), JSON.stringify(config))
});

router.post('/Server', (req, res) => {
  var change = req.body;
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ServerConfig.json'), 'utf8'));
  Object.assign(config, change)
  res.send(JSON.stringify(config))
  fs.writeFileSync(path.join(__dirname, '../JSON/ServerConfig.json'), JSON.stringify(config))
});

router.post('/KeyCode', (req, res) => {
  var change = req.body;
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/KeyCodeConfig.json'), 'utf8'));
  Object.assign(config, change)
  res.send(JSON.stringify(config))
  fs.writeFileSync(path.join(__dirname, '../JSON/KeycodeConfig.json'), JSON.stringify(config))
});

router.post('/Presentation', (req, res) => {
  try {
    var CN = req.body["CN"];
    var slid = req.body["slideshow"];
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), 'utf8'));
    config[CN].params.slideshow = slid
    res.send(JSON.stringify(config))
    fs.writeFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), JSON.stringify(config))
  } catch (err) {
    res.sendStatus(404)
  }
});

module.exports = router;