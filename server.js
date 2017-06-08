// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Proxy plan data and presentatations thru our server to bypass same origin policy
app.get(/\/assets\/json\/(lehrer|schueler)Plan\.json/, function (req, res) {
  // AUTHORIZED 
  //if (req.client.authorized) {
  var externalReq = http.request({
    hostname: "www.plaene.iks.bullencode.de",
    path: req.url.slice(7, req.url.length),
  }, function (externalRes) {
    externalRes.pipe(res);
  });
  externalReq.end();

  // NOT AUTHORIZED
  //} else {
  //  res.send(CLIENT_CERT_UNTRUSTED_ERR());
  //}
});

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
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));