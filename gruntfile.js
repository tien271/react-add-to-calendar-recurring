'use strict'

var _ = require('lodash')
var webpack = require('webpack')

var mergeWebpackConfig = function (config) {
  // Load webpackConfig only when using `grunt:webpack`
  // load of grunt tasks is faster
  var webpackConfig = require('./webpack.config')
  return _.merge({}, webpackConfig, config, function (a, b) {
    if (_.isArray(a)) {
      return a.concat(b)
    }
  })
}

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      min: {
        files: {
          'dist/react-add-to-calendar-recurring.css': 'src/styles/ReactAddToCalendar.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'expanded'
        }
      },
      unmin: {
        files: {
          'dist/react-add-to-calendar-recurring.min.css': 'src/styles/ReactAddToCalendar.scss'
        },
        options: {
          sourcemap: 'none',
          style: 'compressed'
        }
      }
    },

    watch: {
      eslint: {
        files: ['{src,test,docs/src}/**/*.{js,jsx}', '*.js'],
        tasks: ['eslint']
      },

      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },

      karma: {
        files: [
          'src/**/*.jsx',
          'src/**/*.js',
          'test/**/*.jsx',
          'test/**/*.js'
        ],
        tasks: ['karma']
      },

      webpack: {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        tasks: ['webpack']
      }
    },

    scsslint: {
      files: ['src/styles/*.scss', 'docs/src/*.scss'],
      options: {
        config: '.scss-lint.yml',
        colorizeOutput: true,
        exclude: ['docs/src/higlight.scss', 'docs/src/reset.scss']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    eslint: {
      files: ['{src,test,docs/src}/**/*.{js,jsx}', '*.js'],
      options: {
        configFile: '.eslintrc'
      }
    },

    // standalone build for ./dist
    webpack: {
      unmin: mergeWebpackConfig({
        output: {
          filename: 'react-add-to-calendar-recurring.js'
        }
      }),
      min: mergeWebpackConfig({
        output: {
          filename: 'react-add-to-calendar-recurring.min.js'
        },
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compressor: {
              warnings: false
            }
          })
        ]
      }),
      docs: require('./webpack.docs.config')
    },

    // source build for ./lib
    babel: {
      lib: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js', '**/*.jsx'],
          dest: 'lib/',
          ext: '.js'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-scss-lint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-eslint')

  grunt.registerTask('default', ['watch', 'scsslint'])
  grunt.registerTask('travis', ['eslint', 'karma', 'scsslint'])
  grunt.registerTask('build', ['scsslint', 'babel', 'webpack', 'sass'])
}
