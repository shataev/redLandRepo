var gulp = require ('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('stylus', function () {
    return gulp.src('./src/styles/stylus/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            //compress: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('concatCss', ['stylus'], function(){
    return gulp.src('./src/styles/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
});

gulp.task('watch', function(){
    gulp.watch('./src/styles/stylus/*.styl', ['concatCss']);
});

