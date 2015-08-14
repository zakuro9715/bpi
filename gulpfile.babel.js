'use strict';

var gulp = require('gulp')

var babel = require('gulp-babel')
var gls = require('gulp-live-server')
var sourcemaps = require('gulp-sourcemaps')


gulp.task('es6', () =>
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
)

gulp.task('serve', ['watch'], function() {
  var server = gls.new('app.js')
  server.start()
  gulp.watch('src/**/*.js', () => { 
    console.log('Restarting server...')
    server.start.call(server) 
  })
})

gulp.task('watch', ['es6'], () => {
  gulp.watch('src/**/*.js', ['es6'])
})

gulp.task('default', ['watch'])
