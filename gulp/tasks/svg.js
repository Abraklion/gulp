// Минифицирует svg файлы и делает svgSprite, и переносит в папку build/img

module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src($.config.paths.svg)
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace('&gt;', '>'))
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest($.config.output.pathImg))
            .pipe($.browserSync.reload({stream: true}));
    });
};