# Chapter0 - The "non structured" way
- The source of the example looks very clear, ok its a hello world, of course its very clear what happens
```javascript
let express = require('express');

let app = express();
app.listen(process.env.PORT || 80);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
```
- But independ how small the example is, we see some problems we should solve:
    - We use directly require, difficult if we want to use mocks for unit tests or exchange packages with alternative implementations
    - We have configuration mixed with logic and very common express initialization with specific routes for this example
    - If we try to exclude the specific routes to another files we must find a solution how to share access to the app variable
