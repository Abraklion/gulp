// Поднемает сервер и открывает слежку на файлами

module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            server: $.config.output.path
        });

        $.gulp.watch('#src/' + $.config.bulkhead.layout + '/**/*.' + $.config.bulkhead.layout, $.gulp.series($.config.bulkhead.layout));
        $.gulp.watch($.config.watch.css, $.gulp.series('css'));
        $.gulp.watch('#src/style/' + $.config.bulkhead.style + '/**/*.' + $.config.bulkhead.style, $.gulp.series($.config.bulkhead.style));
        $.gulp.watch($.config.watch.js, $.gulp.series('scripts'));
        $.gulp.watch($.config.watch.img, $.gulp.series('images'));

        if ($.config.bulkhead.layout == 'pug') {
            $.gulp.watch($.config.watch.markdown, $.gulp.series('pug'));
            $.gulp.watch($.config.watch.json, $.gulp.series('pug'));
        }
    });
};