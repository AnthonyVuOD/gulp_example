var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//simple gulp task to say hello
gulp.task('hello',function(){
  console.log('Hello TONY!!')
});



// TYPICAL GULP COMMAND
// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })


//converts scss to css
// gulp.task('sass',function(){
//   return gulp.src('app/scss/styles.scss')
//     .pipe(sass()) //converts scss to css//
//     .pipe(gulp.dest('app/css'))
// });


//watches any changes to scss
// gulp.task('watch', function(){
//   gulp.watch('app/scss/styles.scss', ['sass']);
// });


//browserSync which file to update
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir:'app'
    },
  })
});


//must change sass task to broswerSync can automatically update css
gulp.task('sass',function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass().on('error', sass.logError)) //converts scss to css// Does not exit gulp on error
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//watch task to run browserSync AND sass watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/styles.scss', ['sass']); //reload scss
  gulp.watch('app/index.html', browserSync.reload); //reload html
  // gulp.watch ('app/js/something.js', browserSync.reload); //reload javascript
});
