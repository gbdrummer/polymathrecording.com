const babel = require('gulp-babel')
const chassis = require('@chassis/gulp')
const fs = require('fs-extra')
const gulp = require('gulp')
const path = require('path')
const pkg = require('./package.json')
const sourcemaps = require('gulp-sourcemaps')

const srcRootPath = path.resolve('./src')
const Source = {
  assets: path.join(srcRootPath, '/assets/**/*.*'),
  html: path.join(srcRootPath, '/**/*.html'),
  css: path.join(srcRootPath, '/**/*.css'),
  js: path.join(srcRootPath, '/**/*.js')
}

const destRootPath = './dist'
const Dest = {
  assets: path.join(destRootPath, 'assets'),
  html: path.join(destRootPath, 'html'),
  css: path.join(destRootPath, 'css'),
  js: path.join(destRootPath, 'js')
}

gulp.task('clean', next => fs.emptyDir(destRootPath, next))
gulp.task('clean-assets', ['clean'], next => fs.emptyDir(Dest.assets, next))
gulp.task('clean-css', ['clean'], next => fs.emptyDir(Dest.css, next))
gulp.task('clean-js', ['clean'], next => fs.emptyDir(Dest.js, next))


gulp.task('assets', ['clean-assets'], next => {
  return gulp.src(Source.assets).pipe(gulp.dest(Dest.assets))
})

gulp.task('html', ['clean'], next => {
  return gulp.src(Source.html).pipe(gulp.dest(destRootPath))
})

gulp.task('css', ['clean-css'], next => {
  return gulp.src(Source.css)
    .pipe(sourcemaps.init())
    .pipe(chassis({
      importBasePath: path.join(srcRootPath, 'css'),
      theme: path.join(srcRootPath, 'main.theme'),
    	layout: {
    		minWidth: 320,
    		maxWidth: 768
    	}
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destRootPath))
})

gulp.task('js', ['clean-js'], next => {
  return gulp.src(Source.js)
    .pipe(babel({
      presets: ['env'],
      compact: false
    }))
    .pipe(gulp.dest(destRootPath))
})

gulp.task('watch', () => {
  gulp.watch(path.join(srcRootPath, '**/*.*'), ['assets', 'html', 'css', 'js'])
})

gulp.task('build', ['clean', 'assets', 'html', 'css', 'js', 'watch'])
