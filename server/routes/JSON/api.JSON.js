/**
 * this is the JSON management file
 * it returns the configuration saved as json for specific paths
 *
 * @summary   JSON management file
 *
 */

//basic imports
const express = require('express');
const router = express.Router();

const path = require('path'); //used for string to path methods
const http = require('http'); //used for proxying json requests to 'bullencode.de'
var fs = require('fs'); //used for interaction with files

/*
 * setup for the '/ClientConfig' route
 * it returns the configuration in 'ClientConfig.json' as json for an specified client,
 * which is identified by the common name in its certificate
 * if inside 'ClientConfig.json' "Reload": true  is specified this is returned instead.
 * if no known common name is used an error is returned
 */
router.get('/ClientConfig', (req, res) => {
  var data = JSON.parse(fs.readFileSync(path.join(__dirname, 'ClientConfig.json'), 'utf8')); //open the config file and save the json data to 'data'
  try {
    certSubj = req.connection.getPeerCertificate().subject
    if (data["Reload"]) {          // if "Reload": true is specified echo it to the client
      res.send({ "Reload": true })
    } else {
      res.send(data[certSubj.CN]); // elsewise send the client specific data 
    }
  } catch (err) {  // if an error is thrown respond with an error code
    res.status(401);
    res.end()
  }
});

/*
 * setup for the '/ServerConfig' route
 * it returns the configuration in 'ServerConfig.json' as json.
 */
router.get('/ServerConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServerConfig.json'));
});

/*
 * setup for the '/KeyCodeConfig'' route
 * it returns the configuration in 'KeyCodeConfig.json' as json.
 *
 * @deprecated
 */
router.get('/KeyCodeConfig', (req, res) => {
  res.sendFile(path.join(__dirname, 'KeyCodeConfig.json'));
});

/*
 * setup for the '/LehrerPlan' and '/SchuelerPlan' route
 * it proxies the request to www.plaene.iks.bullencode.de and returns the response
 * if it catches an error it responses with an error code
 */
router.get(/\/(Lehrer|Schueler)Plan/, function (req, res) {
    //TODO: DEV OVERRIDE
  res.sendFile(path.join(__dirname, 'PlanData_DEV.json'));
  /*try {
    var externalReq = http.request({ //params for the request to bullencode.de are set and the request is made...
      hostname: "www.plaene.iks.bullencode.de",
      path: req.url == '/LehrerPlan' ? '/json/lehrerPlan.json'
        : (req.url == '/SchuelerPlan' ? '/json/schuelerPlan.json'
          : ''),
    }, function (externalRes) {
      externalRes.pipe(res); //...and the result is piped to the client
    });
    externalReq.end();
    externalReq.on('error', function (e) {  // catch ENETUNREACH or ECONNREFUSED,...
      console.error(e);
      console.error("Continuing Execution...");
    });
  } catch (err) {
    res.status(504); //send error code
    res.end()
  }*/
});
module.exports = router;