# Chapter3 - Use bundles for common features
- In the package.json we add the dependency for the bundle DragonNode.js Express and remove the dependency for express
```javascript
{
  "dependencies": {
    "dragonnodejs": "^5.0.1",
    "dragonnodejs-express": "^3.0.0"
  }
}
```
- We remove the library definition for the express library, remove the own "app" module and add the "app" module of the bundle to the "app.js"
```javascript
// Load the libraries and modules

let config = {
    directory: __dirname + '/',
    modules: [
        [require('dragonnodejs-express'),
            ['modules/app', {
                port: process.env.PORT || 80
            }]
        ],
        ['modules/helloworld', {}]
    ]
};
require('dragonnodejs')(config);
```
- Now we run "npm install", start the app with "node app.js" and open the page in the browser "http://localhost/"
