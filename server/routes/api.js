const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');

/* GET api listing. */

router.get('/JSON/ClientConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'JSON/ClientConfig.json'));
});

router.get('/JSON/ServerConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'JSON/ServerConfig.json'));
});

router.get('/JSON/KeyCodeConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'JSON/KeyCodeConfig.json'));
});

router.get(/\/JSON\/(Lehrer|Schueler)Plan/, function (req, res) {
  // AUTHORIZED 
  //if (req.client.authorized) {
  console.log()
  var externalReq = http.request({
    hostname: "www.plaene.iks.bullencode.de",
    path: req.url == '/JSON/LehrerPlan' ? '/json/lehrerPlan.json'
      : (req.url == '/JSON/SchuelerPlan' ? '/json/schuelerPlan.json'
        : ''),
  }, function (externalRes) {
    externalRes.pipe(res);
  });
  externalReq.end();

  // NOT AUTHORIZED
  //} else {
  //  res.send(CLIENT_CERT_UNTRUSTED_ERR());
  //}
});
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;