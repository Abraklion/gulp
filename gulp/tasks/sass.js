// Компелирует sass с css и переносит файл в папку build/css

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src($.config.paths.sass)
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
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