const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//걸프 의존성

gulp.task('default', function(done) {
    //걸프 작업

    //ESLint 를 실행합니다.
    gulp.src(["es6/**/*.js","public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())

    //노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
    //gulp 문제 해결용  http://blog.naver.com/bluesky4381/221463139377 참고
    done()
});