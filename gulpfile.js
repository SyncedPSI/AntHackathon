const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const webpack = require('webpack-stream');
const connect = require('gulp-connect');
const pug = require('gulp-pug');
const fontmin = require( 'gulp-fontmin');
const zip = require('gulp-zip');

gulp.task('scripts', () => {
  gulp.src('./src/scripts/**/*')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('scripts:build', () => {
  gulp.src('./src/scripts/**/*')
    .pipe(webpack(require('./webpack.config.build.js')))
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('connect', () => {
  connect.server({
    port: 3000,
    root: 'dist',
    livereload: true
  });
});

// compiler and compress less
gulp.task('styles', () => {
  gulp.src('./src/styles/app.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', notify.onError('Error: <%= error.message %>'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload());
});

// compress images
gulp.task('images', () => {
  gulp.src('./src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/images/'))
    .pipe(connect.reload());
});

// diff views
gulp.task('html', () => {
  gulp.src(['./src/index.pug', './src/apply.pug'])
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});


gulp.task('font', () => {
  gulp.src('./src/font/*.ttf')
    .pipe(fontmin({
      text: '0123456789 ABCDEFGHIGKLMNOPQRSTUVWXYZ abcdefghigklmnopqrstuvwxyz\
        蚂蚁开发者大赛 \
        支付宝小程序开发者大赛\
        《《《 报名结束入口将关闭 》》》\
        编程赛创意赛报名提交'
    }))
    .pipe(gulp.dest('./dist/font'))
});


gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.less', ['styles']);
  gulp.watch('./src/images/**/*', ['images']);
  gulp.watch('./src/**/*.pug', ['html']);
});

gulp.task('zip', () => {
  gulp.src('./dist/*')
		.pipe(zip('dist.zip'))
		.pipe(gulp.dest('./'))
});

gulp.task('default', ['connect', 'html', 'styles', 'images', 'font', 'scripts', 'watch']);
gulp.task('build', ['scripts:build', 'zip']);
