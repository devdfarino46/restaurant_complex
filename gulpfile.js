const {src, dest, series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const jade = require('gulp-jade');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        open: false
    });

    watch("src/**/*.jade", templates);
    watch("src/scss/**/*.scss", styles);
    watch("src/js/**/*.js", scripts);
}

function styles() {
    return src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(dest("dist/css/"))
        .pipe(browserSync.stream());
}

function templates() {
    return src("src/**/*.jade")
        .pipe(jade({
            
        }))
        .pipe(dest("dist/"))
        .pipe(browserSync.stream());
}

function scripts() {
    return src("src/js/**/*.js")
        .pipe(babel({
            presets: [
                "@babel/preset-env",
                {
                    "compact": true,
                }
            ]
        }))
        .pipe(dest('dist/js/'))
        .pipe(browserSync.stream());
}

function optimizeImages() {
    return src("dist/img/**/*")
        .pipe(imagemin({verbose: true}))
        .pipe(dest("dist/img/"));
}

exports.styles = series(styles);
exports.templates = series(templates);
exports.scripts = series(scripts);

exports.optimizeImages = series(optimizeImages);
exports.default = series(styles, templates, scripts, browsersync);