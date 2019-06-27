const gulp = require('gulp');
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }))
})

gulp.task('monitorarMudancas', () => {
    watch('src/**/.*.html', () => gulp.start('app.html'))
    watch('src/**/.*.scss', () => gulp.start('app.html'))
    watch('src/**/.*.js', () => gulp.start('app.html'))
    watch('src/assets/ims/**/*.*', () => gulp.start('app.imgs'))
})