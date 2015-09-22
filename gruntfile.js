module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            libs: {
                src: [
                    //'js/libs/jquery.min.js',
                    'fla/libs/easeljs-0.8.1.min.js',
                    'fla/libs/tweenjs-0.6.1.min.js',
                    'fla/libs/movieclip-0.8.1.min.js',
                    'fla/libs/preloadjs-0.6.1.min.js',
                    'js/libs/TweenMax.min.js',
                    'js/libs/jquery.transit.js',
                    //'js/libs/lodash.min.js',
                    'js/libs/jquery.touchSwipe.min.js'
                    // 'js/libs/mootools.core.js',
                    //  'js/libs/multiTouch.js',
                    // 'js/libs/gestures.js'
                ],
                dest: 'build/libs.js',
            },
            distStart: {
                src: [
                    'fla/canvasAnimNew.js',
                    'fla/canvasInitNew.js',
                    'js/app.js'
                ],
                dest: 'build/opening.js'
            },
            distSingle: {
                src: [
                    'fla/singleAnim.js',
                    'fla/singleInit.js',
                    'js/app.js'
                ],
                dest: 'build/single.js'
            },
            distDoubleA: {
                src: [
                    'fla/doubleAnimA.js',
                    'fla/doubleInitA.js',
                    'js/app.js'
                ],
                dest: 'build/double.js'
            },
            distDoubleB: {
                src: [
                    'fla/doubleAnimB.js',
                    'fla/doubleInitB.js',
                    'js/app.js'
                ],
                dest: 'build/doubleB.js'
            }
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
        },
        clean: {
            dev: {
                src: ['fla/imagesStartNew', 'fla/imagesSingle', 'fla/imagesDoubleA', 'fla/imagesDoubleB']
            },
            build: {
                src: ['js/build/*.{png,jpg,gif}', 'imagesStartNew/*.{png,jpg,gif}', 'imagesSingle/*.{png,jpg,gif}', 'imagesDoubleA/*.{png,jpg,gif}', 'imagesDoubleB/*.{png,jpg,gif}']
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path 
                    {
                        cwd: 'fla/',
                        expand: true,
                        flatten: true,
                        src: ['imagesStartNew/*'],
                        dest: './imagesStartNew/',
                        filter: 'isFile'
                    }, {
                        cwd: 'fla/',
                        expand: true,
                        flatten: true,
                        src: ['imagesSingle/*'],
                        dest: './imagesSingle/',
                        filter: 'isFile'
                    }, {
                        cwd: 'fla/',
                        expand: true,
                        flatten: true,
                        src: ['imagesDoubleA/*'],
                        dest: './imagesDoubleA/',
                        filter: 'isFile'
                    }, {
                        cwd: 'fla/',
                        expand: true,
                        flatten: true,
                        src: ['imagesDoubleB/*'],
                        dest: './imagesDoubleB/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['fla/*.*', 'js/*.*'],
                tasks: ['default']

            }
        }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-watch');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean:build', 'concat',/*, 'imagemin'*/'copy' ]);
    //grunt.registerTask('imagesDev', ['copy', /*'clean:build','imagemin'*/ ]);


};
