module.exports = {
    apps : [
        {
            name: "controller server",
            script: "./serverjs/pony/index.js",
            watch: true,
            ignore_watch: [
                './.git',
                './.idea',
                './node_modules'
            ]
        }
    ]
};