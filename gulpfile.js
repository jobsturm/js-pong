//*********** IMPORTS *****************
var gulp = require('gulp'),
    babel = require("gulp-babel"),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    map = require("map-stream"),
    livereload = require("gulp-livereload"),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch'),
    size = require('gulp-size'),
    cleanCSS = require('gulp-clean-css'),
    inline = require('gulp-inline'),
    inlinesource = require('gulp-inline-source'),
    insert = require('gulp-insert'),
    fileinclude = require("gulp-file-include"),
    prettify = require('gulp-prettify'),
    gm = require('gulp-gm'),
    imageop = require('gulp-image-optimization'),
    filesize,
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    reload = browserSync.reload;



var src = "dev/";

function swallowError(error) {
    // If you want details of the error in the console
    notify(error.toString());
    this.emit('end');
}

global.errorMessage = '';

gulp.task("default", ['sass', 'watch', 'js-custom', 'js-library', 'inline', 'templates']);

// Browser sync
gulp.task('serve', function () {
    browserSync.init({
        proxy: "localhost:1337/js-pong/build/"
    });
    var browserSyncReloadAllowed = true;
    
    // Watch SCSS files
    gulp.watch('dev/sass/**/*.scss', ['sass']);
    
    gulp.watch("build/index.php").on('change', function () {
        if (browserSyncReloadAllowed === true) {
            setTimeout(function () {
                browserSync.reload();
                browserSyncReloadAllowed = true;
            }, 50);
            browserSyncReloadAllowed = false;
        }
    });    
});

// JS

gulp.task('js-custom', function () {
    return gulp.src('dev/scripts/custom/**/*.js')
        .pipe(insert.prepend('/* Build by Job Sturm; started 2017 */'))
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(insert.prepend('console.log("Created by Job Sturm -- https://joppert.nl");'))    
        .pipe(insert.append('console.log("Last updated on ' + Date() + '");'))
        .pipe(gulp.dest('build/scripts'))
        .pipe(livereload({
            start: true
        }));
});

gulp.task('js-library', function () {
    return gulp.src('dev/scripts/_libs/*.js')
        .pipe(concat('library.js'))
        .pipe(gulp.dest('build/scripts'))
        .pipe(livereload({
            start: true
        }));
});

// INLINE & INCLUDE
gulp.task('templates', ['js-custom'], function () {
    return gulp.src('dev/templates/*.html')
        .pipe(gulp.dest('build/templates/'));
})


gulp.task('inline', ['js-custom'], function () {
    return gulp.src('dev/*.php')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: 'dev'
        }))
        .pipe(prettify({
            indent_size: 4
        }))
        .pipe(inline({
            js: uglify,
            disabledTypes: ['svg', 'img'],
            ignore: "../build/scripts/*.js"
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('filesize', ['inline'], function () {
    var s = size();
    return gulp.src('dev/*.php')
        .pipe(s)
        .pipe(notify({
            onLast: true,
            message: function message() {
                return 'Finsished gulp. Filesize is ' + s.prettySize;
            }
        }));
});

// SCSS
gulp.task('sass', function () {
    return gulp.src('dev/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 5 versions', '> 1%', 'ie 11'))
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('build/styles/css/'))
        .pipe(browserSync.stream());
});

// WATCH

gulp.task('watch', function () {
    // Watc JS files
    gulp.watch('dev/scripts/custom/**/*.js', ['js-custom', 'inline', 'filesize']);
    gulp.watch('dev/scripts/_libs/*.js', ['js-library', 'inline', 'filesize']);

    // Watch HTML files
    gulp.watch('dev/*.php', ['js-custom', 'js-library', 'inline', 'filesize']);
    gulp.watch('dev/modules/*', ['inline', 'filesize']);
    gulp.watch('dev/modules/**/*', ['inline', 'filesize']);
    gulp.watch('dev/templates/*.html', ['templates']);
});
