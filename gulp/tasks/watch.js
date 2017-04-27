var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// Gulp watching for changes & Injecting stylesheets to browser refresh

gulp.task('watch', function() {
    
    browserSync.init({
        notify: false, // browser notification window will stop
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function() {
        browserSync.reload()
    });
    
    watch('./app/assets/styles/**/*.css', function() { 
        gulp.start('cssInject');
    });
}); // End of gulp watch to update stylesheets via command line.

gulp.task('cssInject', ['styles'], function() {
   return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});