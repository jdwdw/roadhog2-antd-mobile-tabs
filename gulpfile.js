const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp
    .src('./dist/*.css')
    .pipe(
      cleanCSS({ debug: true }, details => {
        console.log('details', details);
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      })
    )
    .pipe(gulp.dest('./dist'));
});
