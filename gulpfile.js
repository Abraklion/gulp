global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    fs: require('fs'),
    config: {
        src: require('./gulp/config'),
        bulkhead: {
            layout: 'html', // html / pug
            style: 'scss', // scss / sass / less / styl
            fullCss: false, // true / false
            fullJs: false, // true / false
            resizeImg: false, // true / false
        },
        paths: {
            html: '#src/html/*.html',
            pug: '#src/pug/*.pug',
            sass: '#src/style/sass/style.sass',
            scss: '#src/style/scss/style.scss',
            less: '#src/style/less/style.less',
            styl: '#src/style/styl/style.styl',
            css: '#src/style/css/**',
            js: '#src/js/**/*.js',
            img: '#src/images/',
            webp: '#src/images/webp/',
            svg: '#src/images/svg/**/*.svg',
            fonts: '#src/fonts/',
            library: {
                jquery: '#src/js/jquery.js'
            }
        },
        output: {
            path: 'build',
            pathJs: 'build/js',
            pathCss: 'build/css',
            pathImg: './build/img/',
            pathFonts: './build/fonts/'
        },
        watch: {
            css: '#src/style/css/**/*.css',
            js: '#src/js/**/*.js',
            img: '#src/images/*.{jpg,png,gif,svg,ico,webp}',
            webp: '#src/images/webp/**/*.{jpg,png,gif}',
            svg: '#src/images/svg/**/*.svg',
            markdown: '#src/helpers/markdown/**/*',
            json: '#src/helpers/json/**/*'
        }
    }
};

$.config.src.forEach(function (path) {
    require(path)();
});