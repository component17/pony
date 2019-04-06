const express = require('express');
const router = express.Router();

const Model = {
    network: require('../models/network')
};

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


    }

    res.status(200).json({message: 'OK!'})
});

router.post('/move', (req, res) => {

    console.log(req.body);

    pythonProcess.stdin.write(`${JSON.stringify(req.body)}\n`);

    res.status(200).json({message: 'OK!'})
});


module.exports = router;
