module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            options: {
                watch: true,
                browserifyOptions: {}
            },
            main: {
                src: 'scripts/index.js',
                dest: 'dist/index.js'
            }
        }
    });
    grunt.registerTask('build', '', function () {
        grunt.task.run([
            'browserify:main'
        ]);
    });
};
