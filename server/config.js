/**
 * this is the main server configuration
 * for a detailed description of the properties provided
 * in here look in the comments below.
 *
 * @summary   main server configuration
 *
 */
config = {
    "ServerPort": 3000,                              //port to listen on
    "ServerPrivateKey": './certs/ServerCert.key',   //private key corresponding to the cert
    "ServerCert": './certs/ServerCert.crt',        //server certificate
    "RootCA": './certs/ClientRootCA.crt',         //CA to check incoming client certs against
    "EnableAuthetification": true                //enable reqesting client cert and reject unauth  
}
module.exports = config;