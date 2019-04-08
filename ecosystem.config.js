module.exports = {
    apps : [
        {
            name: "controller server",
            script: "index.js",
            "cwd": "./serverjs/pony",
            "script": "sudo",
            "args": "npm start",
            watch: true,
            ignore_watch: [
                './.git',
                './.idea',
                './node_modules'
            ]
        }
    ]
};