const gulp = require('gulp');

const ts = require('gulp-typescript');

const gulp_concat = require('gulp-concat');

const gulp_babel = require('gulp-babel');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp_babel({
            minified: true,
            comments: false,
            presets: ['env']
        }))
        .pipe(gulp_concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})