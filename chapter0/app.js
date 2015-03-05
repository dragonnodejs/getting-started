var express = require('express');

var app = express();
app.listen(process.env.PORT);

app.get('/', function (req, res) {
    res.send('Hello World!');
});
