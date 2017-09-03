/**
 * this is the configuration management file
 * it sets the configuration in specific json files
 *
 * @summary   configuration management file
 *
 */

//basic imports
const express = require('express');
const router = express.Router();

const path = require('path'); //used for string to path methods
const http = require('http'); //used for proxying json requests to 'bullencode.de'
var fs = require('fs'); //used for interaction with files

/*
 * path used to set the client specific configuration in 'ClientConfig.json'.
 * the new config shall be provided as 'Content-Type: application/json' in a POST request to this path
 * 
 */
router.post('/Client', (req, res) => {
  try {
    var change = req.body; // save new configuration 
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), 'utf8')); // load all configuration 
    Object.assign(config, change) // apply the new configuration 
    res.send(JSON.stringify(change) + "<br/> => <br/>" + JSON.stringify(config)) //send the change made as response
    fs.writeFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), JSON.stringify(config)) //save the resulting config
  } catch (err) { //if any error occures an error code is sent
    res.sendStatus(422)
  }
});

/*
 * path used to set the server specific configuration in 'ServerConfig.json'.
 * the new config shall be provided as 'Content-Type: application/json' in a POST request to this path
 * 
 */
router.post('/Server', (req, res) => {
  try {
    var change = req.body;         // look above for more detailed commentary
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ServerConfig.json'), 'utf8'));
    Object.assign(config, change)
    res.send(JSON.stringify(config))
    fs.writeFileSync(path.join(__dirname, '../JSON/ServerConfig.json'), JSON.stringify(config))
  } catch (err) { //if any error occures an error code is sent
    res.sendStatus(422)
  }
});

/*
 * path used to set the keycode configuration in 'KeycodeConfig.json'.
 * the new config shall be provided as 'Content-Type: application/json' in a POST request to this path
 *
 * @deprecated
 */
router.post('/KeyCode', (req, res) => {
  var change = req.body;         // look above for more detailed commentary
  var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/KeyCodeConfig.json'), 'utf8'));
  Object.assign(config, change)
  res.send(JSON.stringify(config))
  fs.writeFileSync(path.join(__dirname, '../JSON/KeycodeConfig.json'), JSON.stringify(config))
});

/*
 * path used to only reset the presentation config for a specific client in 'ClientConfig.json'.
 * the new config shall be provided as 'Content-Type: application/json' in a POST request to this path
 *
 */
router.post('/Presentation', (req, res) => {
  //try {
    var CN = req.body["CN"]; // common name and...
    var slid = req.body["slideshow"]; //new slideshow data are saved
    var config = JSON.parse(fs.readFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), 'utf8')); //the Client configuration is loaded...
    config[CN].params.slideshow = slid //and altered
    res.send(JSON.stringify(config)) // the result is send as response...
    fs.writeFileSync(path.join(__dirname, '../JSON/ClientConfig.json'), JSON.stringify(config))//...and saved to disk
  //} catch (err) { //if any error occures an error code is sent
  //  res.sendStatus(500)
  //}
});

module.exports = router;