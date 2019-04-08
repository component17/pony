module.exports = {
    apps : [
        {
            name: "controller server",
            cwd: "./serverjs/pony",
            script: "npm",
            args: "start",
            watch: true,
            ignore_watch: [
                './.git',
                './.idea',
                './node_modules'
            ]
        }
    ]
};