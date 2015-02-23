# Chapter2 - The "Hello World!" with express
- In the package.json we add the dependency for the bundle DragonNode.js Express and remove the dependency for express
```javascript
{
    "dependencies": {
        "dragonnodejs": "^4.0.2",
        "dragonnodejs-express": "^2.0.1"
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
                    port: process.env.PORT
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
- Now we run "npm install", start the app with "PORT=%PORT% npm start" and open the page in the browser "http://localhost:%PORT%/"
