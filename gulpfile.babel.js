'use strict';

var gulp = require('gulp')

var babel = require('gulp-babel')
var bHtml = require('gulp-b-html')
var gls = require('gulp-live-server')
var sourcemaps = require('gulp-sourcemaps')

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


gulp.task('build', ['es6', 'b-html'])

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.es6, ['es6'])
  gulp.watch(paths.bHtml, ['b-html'])
})

gulp.task('default', ['watch'])
