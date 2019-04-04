const express = require('express');
const app = express();

// const cp = require('child_process');
//
// const n = cp.fork(`ttt.js`);

const api = require('./api/index');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api', api);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

