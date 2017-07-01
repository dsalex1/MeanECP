# MeanECP

A reimplementation of the school internal substitution system using the MEAN-stack  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deployment server

Run `node server`  to start the deployment server. Make sure having build the project in advance using `ng build`

## Deployment server config API doc

The deployment server has 4 routes for configuring it. The access to these has to authorized by using a client certificate trusted by '/cert/ClientRootCA.crt'
All paths accept only valid JSON.
 # /Client
   This path is used to configure which client shall get which content
   Useage:
   `{
     [CN]: {
        "type": [type],
        "params": [params]
        }
   }`
   |[CN]|string|CommonName the client which config shall be altered uses in its certificate|
   |[type]|string| a member of TypeDefinition, see below|
   |[params]|object| an object of type Params, see below|
   


