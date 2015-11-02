# Chapter1 - The structure of an application
- In the package.json there is the dependency for DragonNode.js
```javascript
{
  "dependencies": {
    "dragonnodejs": "^5.0.1"
  }
}
```
- A module is a CommonJS module exports a function getting configuration, libraries container and service container
```javascript
/**
 * Description for the module
 * @example
    ['modules/example', {
        // Configuration for the module
    }]
 */

module.exports = (config, libraries, services) => {
    // Implementation for the module
};
```
- The "app.js" contain the configuration for the application with all bundles and modules and their configuration
```javascript
// Load the libraries and modules

let config = {
    directory: __dirname + '/',
    modules: [
        ['modules/example', {
            // Configuration for the module
        }]
    ]
};
require('dragonnodejs')(config);
```
