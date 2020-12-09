// удаляет папку build

module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del($.config.output.path);
    });
};