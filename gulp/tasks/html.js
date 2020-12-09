// Переносит html файлы в папку build

module.exports = function () {
    $.gulp.task('html', function () {
        return $.gulp.src($.config.paths.html)
            .pipe($.gp.fileInclude())
            .pipe($.gulp.dest($.config.output.path))
            .pipe($.browserSync.reload({stream: true}));
    });
};