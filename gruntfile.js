module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'js/libs/jquery.min.js',
                    'fla/libs/easeljs-0.8.1.min.js',
                    'fla/libs/tweenjs-0.6.1.min.js',
                    'fla/libs/movieclip-0.8.1.min.js',
                    'fla/libs/preloadjs-0.6.1.min.js',
                    'js/libs/jquery.transit.js',
                    'js/libs/TweenMax.min.js',
                    'js/libs/jquery.transit.js',
                    'js/libs/lodash.min.js',
                    'js/libs/jquery.touchSwipe.min.js'
                ],
                dest: 'js/build/libs.js',
            },
            distStart: {
                src: [
                    'fla/canvasAnimNew.js',
                    'fla/canvasInitNew.js',
                    'js/app.js'
                ],
                dest: 'js/build/opening.js'
            },
            distSingle: {
                src: [
                    'fla/singleAnim.js',
                    'fla/singleInit.js',
                    'js/app.js'
                ],
                dest: 'js/build/single.js'
            },
            distDoubleA: {
                src: [
                    'fla/doubleAnim.js',
                    'fla/doubleInit.js',
                    'js/app.js'
                ],
                dest: 'js/build/double.js'
            },
            distDoubleB: {
                options: { // Target options
                    optimizationLevel: 5
                },
                src: [
                    'fla/doubleAnimB.js',
                    'fla/doubleInitB.js',
                    'js/app.js'
                ],
                dest: 'js/build/doubleB.js'
            },
        },
        imagemin: {
            start: {
                files: [{
                    expand: true,
                    cwd: 'fla/imagesStartNew',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'imagesStartNew/'
                }]
            },
            single: {
                files: [{
                    expand: true,
                    cwd: 'fla/imagesSingle',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'imagesSingle/'
                }]
            },
            doubleA: {
                files: [{
                    expand: true,
                    cwd: 'fla/imagesDoubleA',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'imagesDoubleA/'
                }]
            },
            doubleB: {
                files: [{
                    expand: true,
                    cwd: 'fla/imagesDoubleB',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'imagesDoubleB'
                }]
            }
        }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'imagemin']);

};
