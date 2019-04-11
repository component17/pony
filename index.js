const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
global.io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser');

const path = require('path');

process.title = "PONY EXPRESS";

global.LastCell = null;

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(__dirname + '/db.json');
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

    socket.on("sensor:event", (data) => {
        console.log('Sensors', data)
        if(LastCell){
            if(LastCell.sensor === data.sensor){
                io.sockets.emit('turn:led', JSON.stringify([]));
                LastCell = null;
                console.log(111, "LED OFF")
            }else{
                let last = {...LastCell};
                last.color = {
                  r: 0,
                  g: 255,
                  b: 0
                };

                let sensorCell = Cells.getCellBySensor(data.sensor);

                console.log(222, [last, sensorCell]);

                if(sensorCell){
                    io.sockets.emit('turn:led', JSON.stringify([last, sensorCell]));
                }
            }
        }
    });
});

const api = require('./api/index');

app.use(express.static(__dirname + '/spa'));

app.use(bodyParser.json());

app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/spa/index.html'));
});

http.listen(8080, () => {
    console.log('listening on http://localhost');
});

