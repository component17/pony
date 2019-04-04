module.exports = {
    apps : [
        {
            name: "controller server",
            script: "./index.js",
            watch: true,
            ignore_watch: [
                './.git',
                './.idea',
                './node_modules'
            ]
        }
    ]
};