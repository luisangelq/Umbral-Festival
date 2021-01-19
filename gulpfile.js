const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

function css() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("./build/css"));
}

function minif() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./build/css"));
}

function images() {
  return src("src/img/**/*")
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Minificaded Image" }));
}

function verWebp() {
    return src("src/img/**/*").pipe( webp()).pipe( dest("./build/img"))
}

function run() {
  watch("src/scss/**/*.scss", css);
}

exports.css = css;
exports.minif = minif;
exports.images = images;
exports.run = run;
exports.default = series( images, verWebp, run )
