import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import ejs from 'gulp-ejs';

gulp.task('ejs',function(){
    return gulp.watch('./*.ejs',function(){
        return(
            gulp.src(
                ['./**/*.ejs','!'+'./**/_*.ejs']
            )
            .pipe(plumber())
            .pipe(ejs())
            .pipe(rename({
                extname:'.html'
            }))
            .pipe(gulp.dest('./'))
        );
    });
});
