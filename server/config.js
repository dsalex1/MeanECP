config = {
    "ServerPort": 8000,                              //port to listen on
    "ServerPrivateKey": './certs/ServerCert.key',   //private key corresponding to the cert
    "ServerCert": './certs/ServerCert.crt',        //server certificate
    "RootCA": './certs/ClientRootCA.crt',         //CA to check incoming client certs against
    "PollForChangesInterval": 5,                 //interval to poll server db for changes
    "EnableAuthetification": false              //enable reqesting client cert and reject unauth  
}
module.exports = config;
