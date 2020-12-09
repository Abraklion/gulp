// Переносит нативные css файлы в папку build/css

module.exports = function () {
    $.gulp.task('css', function () {
        return $.gulp.src($.config.paths.css)
            .pipe($.gulp.dest($.config.output.pathCss))
            .pipe($.browserSync.reload({stream: true}));
    });
};