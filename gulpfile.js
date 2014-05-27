// Include gulp
var gulp = require('gulp');

// Include Our Plugins

var compass = require('gulp-compass');

var livereload = require('gulp-livereload');

gulp.task('compass', function() {
	gulp.src('scss/*.scss')
	.pipe(compass({
		config_file: './config.rb',
		css: 'css',
		sass: 'scss'
	}))
	.pipe(gulp.dest('css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['compass']);

 // Create LiveReload server
 var server = livereload();

  // Watch any files in css/, reload on change
  gulp.watch(['css/**']).on('change', function(file) {
  	server.changed(file.path);
  });

});

// Default Task
gulp.task('default', ['compass', 'watch']);