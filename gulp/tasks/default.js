// Выполняет таски и собирает папку build

module.exports = function () {
    $.gulp.task('default', $.gulp.series('clean', 'fonts', 'images', 'webp', 'svg', 'css', $.config.bulkhead.layout, $.config.bulkhead.style, 'scripts', 'serve'));
};