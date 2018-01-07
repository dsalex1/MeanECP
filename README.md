# MeanECP

A reimplementation of the school internal substitution system using the MEAN-stack.  


link to animation: https://gyazo.com/c754c716a77e20ca53071efe663987c8
![alt text](https://i.gyazo.com/4d48684c6007aac26322dc36b71e57c6.png " ")


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deployment server

Run `node server`  to start the deployment server. Make sure having build the project in advance using `ng build`

## Deployment Server Config API

The deployment server has 3 routes for configuring it. The access to these has to be authorized by using a client certificate trusted by '/cert/ClientRootCA.crt'
All paths only accept valid JSON.

### /api/config/Client

This path is used to configure which client shall get which content.  
Useage:
```
{
    [CN]: {
        "type": [baseType],
        "params": [params]
    }
    (,[CN]: {
        "type": [baseType],
        "params": [params]
    })
}
```

|placeholder |type |explaination |
|---|---|---|
|[CN]|string|the CommonName of the client to be configured, used in its certificate|
|[baseType]|string| a member of BaseType, see below|
|[params]|object| an object of type Params, see below|

example:  
```JSON
{
    "ClientTest1": {
        "type": "LandscapePlan",
        "params": {
            "db": "./api/JSON/LehrerPlan",
            "index1": 0,
            "index2": 1,
            "slideshow": {
                "interval": "5000",
                "timeStart": "2017-6-19 20:10:00",
                "timeEnd": "2017-6-20 20:10:00",
                "params": {
                    "id": "1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU",
                    "iterations": 2,
                    "delay": 1000
                }
            }
        }
    }
}
 ```

### /api/config/Server

This path is used to configure all settings that affect globally all clients.
Useage:
```
{
    [setting]: [value]
    (,[setting]: [value])
}
```

|placeholder |type |explaination |
|---|---|---|
|[setting]|string|setting to be set or modified|
|[value]|any|value to be set|

example:  
```JSON
{
    "defaultTimeout": "5000",
    "pollInterval": 5000
}
 ```

### ~~/api/config/KeyCode~~
<img src="http://i.imgur.com/JEqRxPv.png" />

This path is used to configure what shall be displayed on a keypress.
Useage:
```
{
    [keyCode]: {
        "type": [type],
        "params": [params]
    }
}
```

|placeholder |type |explaination |
|---|---|---|
|[keyCpde]|integer| keyCode to be configured |
|[type]|string| a member of Type, see below|
|[params]|object| an object of type Params, see below|

example:  
```JSON
{
    "32": {
        "type": "FilteredPlan",
        "params": {
            "db": "./api/JSON/LehrerPlan",
            "index1": 0,
            "filter": "And",
            "timeout": 5000
        }
    }
}
 ```
 
 ###  /api/config/Presentation

This path is a shortcut to set an presentation for a certain client.
Useage:
```
{
    "CN": [CN],
    "slideshow":[slideshow]
}
```

|placeholder |type |explaination |
|---|---|---|
|[CN]|string|CommonName of the client the presentation shall be asigned to |
|[slideshow]|string|an object of type Slideshow, see below|

example:  
```JSON
{
    "CN": "testClient1",
    "slideshow": {
        "interval": "5000",
        "timeStart": "2017-6-19 20:10:00",
        "timeEnd": "2017-6-20 20:10:00",
        "params": {
            "id": "1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU",
            "iterations": 2,
            "delay": 1000
        }
    }
}
```
#### BaseType
one of the following:

|value|explaination|
|---|---|
|"LandscapePlan"| View which displays 2 plans in landscape orientation|
|"PortraitPlan"| View which displays 1 plan in portrait orientation |
|"MultiplePlan"| View which displays multiple plans in portrait orientation|

#### Type
one of the following:

|value|explaination|
|---|---|
|any BaseType| /|
|"FilteredPlan"| View which displays multiple plans in portrait orientation with a filter applied|
|"Png"| View which displays a png|

#### Slideshow
an object containing the following Properties:

|property|type|explaination|
|---|---|---|
|"db"|string|database used to obtain the plan data from|
|"interval"|integer|time in ms after which the presentation shall be shown|
|"timeStart"|string|ISO formatted time to beginn showing the presentation at all|
|"timeEnd"|string|ISO formatted time to end showing the presentation at all|
|"params"|Params|object of type Params, see below|

#### Params
an object containing the following Properties, which are optional if not used.

|property|type|explaination|used in|
|---|---|---|---|
|"db"|string|database used to obtain the plan data from|any|
|"index1"|integer|index in db of the first plan which shall be displayed|LandscapePlan, PortraitPlan|
|"index2"|integer|index in db of the second plan which shall be displayed|PortraitPlan|
|"firstIndex"|integer|the first index of all plans that shall be displayed|MultiplePlan|
|"slideshow"|Slideshow| and Shlidshow object that shall be attached to aview |any BaseTypes|
|"filter"|string|filter to be applied on a filteredPlan page|FilteredPlan|
|"file"|string|file to be shown, must be an png|Png|
|"timeout"|integer|timeout in ms until switching from a keypress|FilteredPlan,Png|
|"id"|string|id of te presentation to be shown|Slideshow|
|"iterations"|integer|how many times the presentation shall be iterated through|Slideshow|
|"delay"|integer|time in ms a slide shall be shown before switching to the next one|Slideshow|
