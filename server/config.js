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
    "ServerPrivateKey": './certs/Client_LZ_1/privkey.pem',   //private key corresponding to the cert
    "ServerCert": './certs/Client_LZ_1/cert.pem',        //server certificate
    "RootCA": './certs/ClientRootCA.crt',         //CA to check incoming client certs against
    "EnableAuthetification": true                //enable reqesting client cert and reject unauth  
}
module.exports = config;