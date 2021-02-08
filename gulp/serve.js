module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            // server: {
            //     baseDir: './build/' 
            // },

            proxy: 'http://fleso.loc',
            notify: false,
            // online: true
        });

    });
}