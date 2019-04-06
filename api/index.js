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

router.get('/cells-on-port/:port_id', (req, res) => {
    let cells = Cells.getCellsOnPort(req.params.port_id);

    res.status(200).json(cells);
});

router.post('/cells-on-port/:port_id', (req, res) => {
    let cells = Cells.syncCellsOnPort(req.params.port_id, req.body);

    res.status(200).json(cells)
});

router.post('/move', (req, res) => {

    console.log(req.body);

    // Driver.sendCommand(req.body);

    io.sockets.emit('turn:led', JSON.stringify(req.body));

    res.status(200).json({message: 'OK!'})
});


module.exports = router;
