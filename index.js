const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
global.db = low(adapter);

db.defaults({
    cells: []
}).write();

const cleanExit = () => {
    console.log('\nServer stopped!!!');
    process.exit()
};
process.on('SIGINT', cleanExit);
process.on('SIGTERM', cleanExit);

global.Driver = require('./models/driver');

// const cp = require('child_process');
//
// const n = cp.fork(`ttt.js`);

const api = require('./api/index');

app.use(express.static('spa'));

app.use(bodyParser.json());

app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/spa/index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

