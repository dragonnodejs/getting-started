let express = require('express');

let app = express();
app.listen(process.env.PORT || 80);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
