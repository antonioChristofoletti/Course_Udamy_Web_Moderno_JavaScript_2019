const gulp = require('gulp');

const concat = require('gulp-concat'); // Utilizado para unir arquivos, criando apenas 1 arquivo

const uglify = require('gulp-uglify'); // Utilizado para minificar os arquivos

const babel = require('gulp-babel'); // Utilizado tanto para minificar, remover comentário, modificar propriedades do código-fonte para torná-lo mais universal

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true,
            comments: false,
            presets: ['env'],
        }))
        .pipe(uglify())
        .on('erro', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
});