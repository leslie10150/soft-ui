const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const entryConfig = require('./../src/entryCss')

function buildCss(cb) {
  gulp
    .src('./../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('soft-ui.css'))
    .pipe(gulp.dest('./../lib/styles'))

  cb()
}

function buildSeperateCss(cb) {
  entryConfig.forEach((compName) => {
    gulp
      .src(`./../src/styles/packages/${compName}.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(cleanCSS())
      .pipe(rename(`${compName}.css`))
      .pipe(gulp.dest('./../lib/styles'))
  })
  cb()
}

exports.default = gulp.series(buildCss, buildSeperateCss)
