'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var envify = require('envify');
var lrload = require('livereactload');


function createBundler(useWatchify) {
  return browserify({
    entries: [ './src/app.js' ],
    transform: [ [babelify, {}], [envify, {}] ],
    plugin: !useWatchify ? [] : [ lrload ],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  })
}

gulp.task('bundle:js', function() {
  var bundler = createBundler(false)
  bundler
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('.'))
})

gulp.task('watch:js', function() {
  var bundler = createBundler(true)
  var watcher = watchify(bundler)
  rebundle()
  return watcher
    .on('error', gutil.log)
    .on('update', rebundle)

  function rebundle() {
    gutil.log('Update JavaScript bundle')
    watcher
      .bundle()
      .on('error', gutil.log)
      .pipe(source('build/app.min.js'))
      .pipe(buffer())
      .pipe(gulp.dest('.'))
  }
})

gulp.task('watch:server', function() {
  nodemon({ 
      script: 'server/run.js', 
      exec: 'babel-node',
      ext: 'js', 
      ignore: ['gulpfile.js', 'build/app.min.js', 'node_modules/*'] 
    })
    .on('change', [])
    .on('restart', function () {
      console.log('Server restarted')
    })
})

gulp.task('default', ['watch:server', 'watch:js'])
