'use strict';

var gulp = require('gulp')

var babel = require('gulp-babel')
var babelify = require('babelify')
var browserify = require('browserify')
var bHtml = require('gulp-b-html')
var gls = require('gulp-live-server')
var sourcemaps = require('gulp-sourcemaps')
var stylus = require('gulp-stylus')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var vueify = require('vueify')
var paths = require('./paths')

gulp.task('es6', () =>
  gulp.src(paths.es6)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
)

gulp.task('serve', ['watch'], function() {
  var server = gls.new('app.js')
  server.start()
  gulp.watch(paths.es6, () => {
    console.log('Restarting server...')
    server.start.call(server) 
  })
})

gulp.task('b-html', () =>
  gulp.src(paths.bHtml)
    .pipe(bHtml())
    .pipe(gulp.dest('./dist/static'))
)

gulp.task('stylus', () => {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest('./dist/static'))
})

gulp.task('browserify', () => {
  var b = browserify({
    entries: paths.clientApp,
    transform: [babelify, vueify],
  })
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/static'));
})

gulp.task('build', ['es6', 'b-html', 'stylus', 'browserify'])

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.es6, ['es6'])
  gulp.watch(paths.bHtml, ['b-html'])
  gulp.watch(paths.stylus, ['stylus'])
  gulp.watch(paths.clientAppTriger, ['browserify'])
})

gulp.task('default', ['watch'])
