/**
 * this is the main server file
 * it sets up the https server using the config provided in 'config',
 * sets up the route for presentation data, which are proxied to 'docs.google.com',
 * delegates the API management to './server/routes/api'
 * and sets the default route to index.html
 *
 * @summary   main server file
 *
 */

// Get dependencies
const express = require('express'); //basic framework
const path = require('path'); //for path from string methods
const https = require('https'); //basic server module
const bodyParser = require('body-parser'); //for json parsing
var fs = require('fs'); //to supply certificate files 

// Load configuration file
const config = require('./server/config');

// Get our API routes
const api = require('./server/routes/api');

/**
 * set up https server using configuration in 'config'
 */
var options = {
  key: fs.readFileSync(config["ServerPrivateKey"]),
  cert: fs.readFileSync(config["ServerCert"]),
  ca: fs.readFileSync(config["RootCA"]),
  requestCert: config["EnableAuthetification"],
  rejectUnauthorized: config["EnableAuthetification"]
};
const app = express();
const server = https.createServer(options, app)


// declare Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Proxy plan data and presentatations thru our server to bypass same origin policy
app.get('(/static)?/presentation/*', function (req, res) {
  var externalReq = https.request({
    hostname: "docs.google.com",
    path: req.url
  }, function (externalRes) {
    externalRes.pipe(res);
  });
  externalReq.end();
  externalReq.on('error', function (e) {  // catch ENETUNREACH or ECONNREFUSED,...
    console.error(e);
    console.error("Continuing Execution...");
  });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from config and store in Express.
 */
const port = config["ServerPort"] || '3000';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));