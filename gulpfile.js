var gulp = require('gulp');
var eslint = require('gulp-eslint');
//걸프 의존성을 이곳에 표기

gulp.task('lint', function(){
    //걸프 작업을 이곳에 표기
    gulp.src(['js/test.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task ('default', ['lint']);