const spawn = require("child_process").spawn;
const pythonProcess = spawn('sudo', ["python", "test.py"], {
    detached: true,
    stdio: 'ignore'
});

//pythonProcess.unref();

process.on('exit', () => {
    pythonProcess.kill()
});

pythonProcess.on('message', function (message) {
    console.log('Received message...');
    console.log(message);
});

pythonProcess.stdout.on('data', (data) => {
    console.log(555);
    console.log(data.toString());
});

pythonProcess.on('error', (code) => {
    console.log('python process error with code ' + code);
});

pythonProcess.on('exit', (code) => {
    console.log('python process exited with code ' + code);
});

pythonProcess.stderr.on('data', (data) => {
    console.log(`grep stderr: ${data}`);
});

module.exports = {
    sendCommand(response){
        pythonProcess.stdin.write(`${JSON.stringify(response)}\n`);
    }
};