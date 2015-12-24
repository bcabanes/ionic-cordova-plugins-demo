var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var fs = require('fs');
var replace = require('gulp-replace');

var paths = {
  sass: ['./scss/**/*.scss']
};

var config = {
  libclientionic: './www/vendors/ionic-platform-web-client/dist/'
};
gulp.task('ioconfig', function () {
    var src = config.libclientionic + 'ionic.io.bundle*.js';
    var ioconfig = fs.readFileSync(".io-config.json", "utf8").slice(0, -1);
    var start = '"IONIC_SETTINGS_STRING_START";var settings =';
    var end =  '; return { get: function(setting) { if (settings[setting]) { return settings[setting]; } return null; };"IONIC_SETTINGS_STRING_END"';
    var replaceBy = start + ioconfig + end;
    console.log('inject .io-config in ionic.io.bundle.js');
console.log(replaceBy);
    gulp.src(src)
      .pipe(replace(/"IONIC_SETTINGS_STRING_START.*IONIC_SETTINGS_STRING_END"/, replaceBy))
      .pipe(gulp.dest(config.libclientionic));
});

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
