const express = require('express');
const router = express.Router();

const Model = {
    network: require('../models/network')
};


const spawn = require("child_process").spawn;
const pythonProcess = spawn('sudo', ["python", "test.py"], {
    detached: true,
    stdio: [null, null, null, 'ipc']
});

pythonProcess.unref();

console.log(555)

pythonProcess.on('message', function (message) {
    console.log('Received message...');
    console.log(message);
});

pythonProcess.stdout.on('data', (data) => {
    console.log(555)
    console.log(data.toString());
});

pythonProcess.on('error', (code) => {
    console.log(555)

    console.log('python process error with code ' + code);
});

pythonProcess.on('exit', (code) => {
    console.log(777777)
    console.log('python process exited with code ' + code);
});

pythonProcess.stderr.on('data', (data) => {
    console.log(`grep stderr: ${data}`);
});


// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

router.get('/', (req, res) => {
    res.send('This api version 1.0');
});

router.get('/network', (req, res) => {
    res.status(200).json(Model.network.getlInfo())
});

router.get('/test', (req, res) => {

    for(let i = 0; i < 60; i++){
        let response = [
            {
                port: 0,
                start: 0,
                end: i,
                color: {
                    r: i * 2,
                    g: 0,
                    b: 255
                }
            },
        ];

        pythonProcess.stdin.write(`${JSON.stringify(response)}\n`);
    }

    res.status(200).json({message: 'OK!'})
});


module.exports = router;
