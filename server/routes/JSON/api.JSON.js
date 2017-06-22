const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');
var fs = require('fs');

/* GET api listing. */

router.get('/ClientConfig', (req, res) => {
  var data = JSON.parse(fs.readFileSync(path.join(__dirname, 'ClientConfig.json'), 'utf8'));
  try {
    certSubj = req.connection.getPeerCertificate().subject
    res.send(data[certSubj.CN]);
  } catch (err) {
    res.send(data["ClientTest1"]);//res.sendStatus(404); //REFACTOR: errorhandling
  }
});

router.get('/ServerConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServerConfig.json'));
});

router.get('/KeyCodeConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'KeyCodeConfig.json'));
});

router.get(/\/(Lehrer|Schueler)Plan/, function (req, res) {
  // AUTHORIZED 
  //if (req.client.authorized) {
  console.log()
  var externalReq = http.request({
    hostname: "www.plaene.iks.bullencode.de",
    path: req.url == '/LehrerPlan' ? '/json/lehrerPlan.json'
      : (req.url == '/SchuelerPlan' ? '/json/schuelerPlan.json'
        : ''), //REFACTOR: errorhandling
  }, function (externalRes) {
    externalRes.pipe(res);
  });
  externalReq.end();

  // NOT AUTHORIZED
  //} else {
  //  res.send(CLIENT_CERT_UNTRUSTED_ERR());
  //}
});
module.exports = router;