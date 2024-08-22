import gulp from 'gulp';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';

gulp.task('images',function(){
	return gulp.src('src/*', {encoding: false}) //srcディレクトリ以下の画像を全て監視
		.pipe(imagemin([
			mozjpeg({quality: 75, progressive: true}), //jpeg画像の圧縮
			optipng({optimizationLevel: 5}), //png画像の圧縮
		]))
		.pipe(gulp.dest('images')) //imagesディレクトリに出力
});
