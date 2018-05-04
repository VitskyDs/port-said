var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
   console.log('hi!');
});

browserSync.init({server: './'});
browserSync.stream();
