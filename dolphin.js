'use strict';

var dolphin = require('dolphin-core');
var cluster = require('cluster');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (cluster.isMaster && process.env.NODE_MODE !== undefined) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function (worker) {
        // Replace the dead worker, we're not sentimental
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();
    });
} else {
    // Code to run if we're in a worker process
    var workerId = 0;
    if (!cluster.isMaster) {
        workerId = cluster.worker.id;
    }

    dolphin.().then(function () {
        console.log('Dolphin started as mode (' + process.env.NODE_ENV + ') cluster.worker.id:', workerId);
    });
}

