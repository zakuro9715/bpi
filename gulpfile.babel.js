'use strict';

var gulp = require('gulp')

var babel = require('gulp-babel')
var bHtml = require('gulp-b-html')
var gls = require('gulp-live-server')
var sourcemaps = require('gulp-sourcemaps')


gulp.task('es6', () =>
  gulp.src('server/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
)

gulp.task('serve', ['watch'], function() {
  var server = gls.new('app.js')
  server.start()
  gulp.watch('server/**/*.js', () => {
    console.log('Restarting server...')
    server.start.call(server) 
  })
})

gulp.task('b-html', () =>
  gulp.src('./client/**/*.bhtml')
    .pipe(bHtml())
    .pipe(gulp.dest('./dist/static'))
)


gulp.task('build', ['es6', 'b-html'])

gulp.task('watch', ['build'], () => {
  gulp.watch('./server/**/*.js', ['es6'])
  gulp.watch('./clist/**/*.bhtml', ['b-html'])
})

gulp.task('default', ['watch'])
