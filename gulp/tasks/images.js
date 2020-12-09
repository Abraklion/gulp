// Минифицирует и переносит jpg,png картинки, а так же просто переносит gif,svg,ico,webp картинки в папку build/img

module.exports = function () {
    $.gulp.task('images', function () {
        return $.gulp.src($.config.paths.img + '*.{jpg,png}')
            .pipe($.gp.if($.config.bulkhead.resizeImg,$.gp.tinypngCompress({
                key: 'yPnptfy8hjVP6f0Y0vC7mbdwT4hPZfJs',
                parallel: false, // асинхронная загрузка всех картинок (по умолчанию: true)
                parallelMax: 2 // сколько за раз отправлять картинок на сервер (по умолчанию: 5)
            })))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.gulp.src($.config.paths.img + '*.{gif,svg,ico,webp}'))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.browserSync.reload({stream: true}));
    });
};