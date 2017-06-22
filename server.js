// Get dependencies 
const express = require('express');
const path = require('path');
const https = require('http'); //FIXME: https
const bodyParser = require('body-parser');
var fs = require('fs'); //to supply files certificate files 
// Load configuration file
const config = require('./server/config');
// Get our API routes
const api = require('./server/routes/api');

/**
 * Create HTTP server.
 */
var options = {
  key: fs.readFileSync(config["ServerPrivateKey"]),
  cert: fs.readFileSync(config["ServerCert"]),
  ca: fs.readFileSync(config["RootCA"]),
  requestCert: config["EnableAuthetification"],
  rejectUnauthorized: config["EnableAuthetification"]
};//set up https server with client certification required and rejected invalid
const app = express();
const server = https.createServer(app)//options, app);/FIXME: options

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Proxy plan data and presentatations thru our server to bypass same origin policy
app.get('(/static)?/presentation/*', function (req, res) {
  // AUTHORIZED 
  //if (req.client.authorized) {
  var externalReq = https.request({
    hostname: "docs.google.com",
    path: req.url
  }, function (externalRes) {
    externalRes.pipe(res);
  });
  externalReq.end();

  // NOT AUTHORIZED
  //} else {
  //  res.send(CLIENT_CERT_UNTRUSTED_ERR());
  //}
});
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));