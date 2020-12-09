// Переносит html файлы в папку build

module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src($.config.paths.pug)
            .pipe($.gp.plumber())
            .pipe($.gp.pug({
                pretty: true
                // locals : {
                //     jsonData : JSON.parse($.fs.readFileSync('./#src/helpers/json/html-data.json', 'utf8'))
                // }
            }))
            .pipe($.gulp.dest($.config.output.path))
            .pipe($.browserSync.reload({stream: true}));
    });
};