var express = require('express');

var app = express();
app.listen(process.env.PORT || 80);

app.get('/', function (req, res) {
    res.send('Hello World!');
});
