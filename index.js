const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
global.io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser');

process.title = "PONY EXPRESS";

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
global.Cells = require('./models/cell');

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('message', 'sfgsdgdfgsdgsdfgdsf')

});

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

http.listen(3000, () => {
    console.log('listening on *:3000');
});

