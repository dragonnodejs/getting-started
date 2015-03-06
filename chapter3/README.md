# Chapter3 - Use bundles for common features
- In the package.json we add the dependency for the bundle DragonNode.js Express and remove the dependency for express
```javascript
{
    "dependencies": {
        "dragonnodejs": "^4.0.4",
        "dragonnodejs-express": "^2.1.1"
    }
}
```
- We remove the library definition for the express library, remove the "app.js" module and add the module of the bundle to the "app.js"
```javascript
// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT || 80
                }
            }]
        ],
        directory: {
            helloworld: {}
        }
    }
};
require('dragonnodejs')(config);
```
- Now we run "npm install", start the app with "npm start" and open the page in the browser "http://localhost/"
