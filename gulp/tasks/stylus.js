// Компелирует stylus с css и переносит файл в папку build/css

module.exports = function () {
    $.gulp.task('styl', function () {
        return $.gulp.src($.config.paths.styl)
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus())
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ["last 2 versions"],
            }))
            .pipe($.gp.if($.config.bulkhead.fullCss,$.gulp.dest($.config.output.pathCss)))
            .pipe($.gp.csso())
            .pipe($.gp.rename('style.min.css'))
            .pipe($.gp.sourcemaps.write(''))
            .pipe($.gulp.dest($.config.output.pathCss))
            .pipe($.browserSync.reload({stream: true}));
    });
};