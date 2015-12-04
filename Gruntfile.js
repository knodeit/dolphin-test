'use strict';

var paths = {
    js: ['packages/**/*.js']
};

module.exports = function (grunt) {

    if (process.env.NODE_ENV !== 'production') {
        require('time-grunt')(grunt);
    }

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: paths.js,
                options: {
                    jshintrc: true
                }
            }
        },
        execute: {
            target: {
                src: ['dolphin.js']
            }
        }
    });

    //Load NPM tasks
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-execute');

    //Default task(s).
    grunt.registerTask('default', ['jshint', 'execute']);
    //grunt.registerTask('test', ['env:test', 'mochaTest:all']);
};
