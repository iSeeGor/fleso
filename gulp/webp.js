const cwebp = require('gulp-cwebp');

module.exports = function(){

	$.gulp.task('webp', () => {

        return $.gulp.src('src/images/**/*')
		.pipe(cwebp({
			lossless: true,
            quality: 100,
            alphaQuality: 100
		}))
		.pipe($.gulp.dest('buil/images/'));

	});
	
}