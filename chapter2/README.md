# Chapter2 - The "Hello World!" with express
- In the package.json we add the dependency for Express
```javascript
{
  "dependencies": {
    "dragonnodejs": "^5.0.1",
    "express": "^4.13.3"
  }
}
```
- We add the library definition for the express library into the "app.js", so express is available in the libraries container
```javascript
// Load the libraries and modules

let config = {
    libraries: {
        express: require('express')
    },
    ...
```
- We add an "app.js" module to initialize express with the express library from the library container
- We use the port from the configuration
- We store the app service into the service container
```javascript
/**
 * Express initialization and app service
 * @example
    ['modules/app', { port: process.env.PORT || 80 }]
 */

module.exports = (config, libraries, services) => {
    let express = libraries.express;

    let app = express();
    app.listen(config.port);

    services.app = app;
};
```
- We add a "helloworld.js" module to define a route with the app service from the service container serving the "Hello World!"
```javascript
/**
 * Serves the "Hello World!"
 * @example
    ['modules/helloworld', {}]
 */

module.exports = (config, libraries, services) => {
    let app = services.app;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
};
```
- We add both modules with their configuration to the "app.js"
```javascript
    ...
    directory: __dirname + '/',
    modules: [
        ['modules/app', { port: process.env.PORT || 80 }],
        ['modules/helloworld', {}]
    ]
};
require('dragonnodejs')(config);
```
- Now we run "npm install", start the app with "node app.js" and open the page in the browser "http://localhost/"
