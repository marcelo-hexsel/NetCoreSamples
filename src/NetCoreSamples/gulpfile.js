/// <binding BeforeBuild='build' Clean='clean' ProjectOpened='install' />
"use strict";

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  cssmin = require("gulp-cssmin"),
  less = require("gulp-less"),
  uglify = require("gulp-uglify"),
  tsc = require('gulp-typescript'),
  tscConfig = require('./tsconfig.json'),
  sourcemaps = require('gulp-sourcemaps'),
  tslint = require('gulp-tslint'),
  install = require("gulp-install");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

/**
 *  Angular 2 Paths
 */
paths.appTypeScript = paths.webroot + "app/**/*.ts";
paths.typings = "./typings/**/*.d.ts";
paths.typeScriptOutPath = paths.webroot + "app/";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("less", function () {
    return gulp.src(paths.webroot + '/less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest(paths.webroot + '/css'));
});

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
      .pipe(concat(paths.concatJsDest))
      .pipe(uglify())
      .pipe(gulp.dest("."));
});

gulp.task("min:css", ["less"], function () {
    return gulp.src([paths.css, "!" + paths.minCss])
      .pipe(concat(paths.concatCssDest))
      .pipe(cssmin())
      .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("bundle", ["min"], function () {

});

gulp.task("ts-lint", function () {
    return gulp
            .src(paths.appTypeScript)
            .pipe(tslint({
                formatter: "prose"
            }))
            .pipe(tslint.report());
});

gulp.task("install", function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task("compile:ts", function () {
    var sources = [
        paths.appTypeScript,
        paths.typings
    ];

    var result = gulp
        .src(sources)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscConfig))
        .js        
        .pipe(gulp.dest(paths.typeScriptOutPath));

    return result;
});

gulp.task("compile", ["compile:ts"]);

gulp.task("build", ["clean", "bundle", "compile", "ts-lint"]);