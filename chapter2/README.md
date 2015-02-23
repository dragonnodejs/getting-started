# Chapter2 - The "Hello World!" with express
- In the package.json we add the dependency for Express
```javascript
{
    "dependencies": {
        "dragonnodejs": "^4.0.2",
        "express": "^4.11.0"
    }
}
```
- We add the library definition for the express library into the "app.js", so express is available in the libraries container
```javascript
var config = {
    libraries: {
        express: require('express')
    },
    directory: __dirname + '/modules/',
    ...
```
- We add an "app.js" module to initialize express with the express library from the library container
- We use the port from the configuration
- We store the app service into the service container
```javascript
/*
 * Express initialization and app service
 * @example
    app: {
        port: process.env.PORT
    }
 */

module.exports = function (config, libraries, services) {
    var express = libraries.express;

    var app = express();
    app.listen(config.port);

    services.app = app;
};
```
- We add a "helloworld.js" module to define a route with the app service from the service container serving the "Hello World!"
```javascript
/**
 * Serves the "Hello World!"
 * @example
    helloworld: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
};
```
- We add both modules with their configuration to the "app.js"
```javascript
    ...
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            app: {
                port: process.env.PORT
            },
            helloworld: {}
        }
    }
};
```
- Now we run "npm install", start the app with "PORT=%PORT% npm start" and open the page in the browser "http://localhost:%PORT%/"
