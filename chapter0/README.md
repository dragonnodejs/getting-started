# Chapter0 - The "non structured" way
- The source of the example looks very clear, ok its a hello world, of course its very clear what happens
```javascript
var express = require('express');

var app = express();
app.listen(process.env.PORT || 80);

app.get('/', function (req, res) {
    res.send('Hello World!');
});
```
- But independ how small the example is, we see any problems we should solve:
    - We use directly require, difficult if we want to use mocks for unit tests or exchange package with alternative implementations
    - We have configuration mixed with logic, difficult if we want to reuse the code
    - We mixed the very general express initialization with specific routes for this example
    - If we try to exclude the specific routes to another files we must find a solution how they get access to the app variable
