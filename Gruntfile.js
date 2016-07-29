// Generated on 2014-11-08 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'src/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/{,*/}*',
            '!dist/.git*'
          ]
        }]
      }
    },

    concat: {
      options: {
        banner: '\'use strict\';\n',
        process: function(src, filepath) {
          return '// Source: ' +
            filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        }
      },
      dist: {
        src: ['src/angular-corbel.module.js', 'src/*/*.js'],
        dest: 'dist/angular-corbel.js',
      },
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      },
      server: {
        configFile: 'test/karma.conf.js',
        autoWatch: true
      }
    },

    versioncheck: {
      options: {
        skip: ['angular', 'angular-mocks'],
        hideUpToDate: true
      },
      all: {}
    }

  });

  grunt.registerTask('test', [
    'versioncheck',
    'clean',
    'karma:unit'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'test',
    'concat'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
