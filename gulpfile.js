

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	minifyHtml = require('gulp-minify-html'),
	// jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin'),
	watch = require('gulp-watch');
	// pngquant = require('imagemin-pngquant');


gulp.task('minify-js',function(){
	gulp.src('scripts/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});


gulp.task('minify-css',function(){
	gulp.src('style/stylesheets/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html',function(){
	gulp.src('*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist'));
});
/*
gulp.task('jshint',function(){
	gulp.src('scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});*/

gulp.task('minify-image',function(){
	return gulp.src('style/images/*.*')
				.pipe(imagemin())
				.pipe(gulp.dest('dist/images'))
});

gulp.task('watch',function(){
	gulp.src('scripts/*.js')
		.pipe(gulp.dest('dist/js'))
});

gulp.task('watch',function(){
	gulp.src('style/stylesheets/*.css')
		.pipe(gulp.dest('dist/css'))
});

gulp.task('watch',function(){
	gulp.src('*.html')
		.pipe(gulp.dest('dist'))
})


gulp.task('default',['watch','minify-js','minify-css','minify-html']);