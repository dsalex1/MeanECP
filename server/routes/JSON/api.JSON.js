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
    if (data["Reload"]) {
      res.send({ "Reload": true })
    } else {
      res.send(data[certSubj.CN]);
    }
  } catch (err) {
    res.send(data["ClientTest1"]);
  }
});

router.get('/ServerConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServerConfig.json'));
});

router.get('/KeyCodeConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'KeyCodeConfig.json'));
});

router.get(/\/(Lehrer|Schueler)Plan/, function (req, res) {
  try {
    var externalReq = http.request({
      hostname: "www.plaene.iks.bullencode.de",
      path: req.url == '/LehrerPlan' ? '/json/lehrerPlan.json'
        : (req.url == '/SchuelerPlan' ? '/json/schuelerPlan.json'
          : ''),
    }, function (externalRes) {
      externalRes.pipe(res);
    });
    externalReq.end();
  } catch (err) {
    res.status(504);
    res.end()
  }
});
module.exports = router;