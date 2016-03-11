var gulp = require('gulp');
var http = require('http');
var connect = require('gulp-connect');

//Validators
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

//Builders
var less = require('gulp-less');

//Optimizers
var concat = require('gulp-concat');

/*
---------------------------------
Main functions
---------------------------------
*/

gulp.task('less', function () {
  return gulp.src('./assets/less/site.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('js',['validate-js'], function () {
  return gulp.src(['./assets/js/*.js','!assets/js/site.js'])
    .pipe(concat('site.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('validate-js', function () {
  return gulp.src(['./assets/js/custom.js'])
    .pipe(jshint())
  	.pipe(jshint.reporter(stylish))
  	.pipe(jshint.reporter('fail'))
});

//Set up our webserver
gulp.task('serve', ['less', 'js'], function(){
  connect.server({
      root: './',
      livereload: true
    });
});

gulp.task('reload', ['less', 'js'], function(){
	connect.reload();
});

// Watch
gulp.task('watch', function() {
  // Watch .less files
  gulp.watch('./assets/less/*.less', ['less', 'reload']);
  gulp.watch('./assets/css/*.css', ['reload']);
  gulp.watch('./assets/js/*.js', ['js', 'reload']);
  gulp.watch(['./**/*.html'], ['reload']);
});

gulp.task('default', ['serve', 'watch']);
