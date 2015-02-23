# Chapter1 - The structure of an application
- In the package.json there is the dependency for DragonNode.js
```javascript
{
    "dependencies": {
        "dragonnodejs": "^4.0.2"
    }
}
```
- The "app.js" contain the configuration for the application with all modules and bundles and their configuration
```javascript
// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            example: {
                // Configuration for the module
            }
        }
    }
};
require('dragonnodejs')(config);
```
- A module is a CommonJS module exports a function getting configuration, libraries container and service container
```javascript
/**
 * Description for the module
 * @example
    example: {}
 */

module.exports = function (config, libraries, services) {
    // Implementation for the module
};
```
