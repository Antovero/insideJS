# FE_study

## 1. ES6
* ECMA Script 6 버전 이다. 차세대 자바스크립트 문법. 현재는 ES5를 대부분 표준으로 쓰며 프로젝트를 제작하고 있다. 

## 2. GIT
* 분산 버전 관리 시스템
* 현재 대표적인 형상 관리 툴이자, 프로젝트 제작시에 필수적으로 사용해야 하는 시스템.
* GITHUB 를 이용하여 실제로 로컬 작업물을 웹상에 REMOTE 할 수 있다.


## 3. Node.Js
* Chrome v8 Javascript 엔진으로 빌드된 Javascript 런타임. (여기서 중요한 포인트는 '런타임')
    * 런타임이란
        * 런타임은 프로그램이 실행되고 있을 때, 존재하는 그곳을 의미한다.
        * 즉, 프로그래밍 언어가 구동되고 있는 환경
        ex) JS는 web browser 와 Node.js 환경에서 구동되는 두 측면이 있고, Browser 와 Node.js 를 런타임이라고 볼 수 있다.
* 예전에는 JS 런타임은 Web Browser 밖에 존재하지 않았음.
* Node.Js 가 그 한계를 극복


## 4. NPM
* npm은 nodeJS 기반의 모듈을 모아둔 저장소이자, Node package Manager 이다.


## 5. GULP 
* 프로젝트 제작 시, 반복적인 작업을 일괄적으로 처리해주는 툴. (하단의 BABEL과 콜라보레이션 예시 주목)


## 6. BABEL (+GULP)
* ES6 에서 ES5 로 변환해주는 트랜스컴파일러.

    * ex) GULP를 이용한 BABEL 사용  (ES6 to ES5)
    ````javascript
    const gulp = require('gulp');
    const babel = require('gulp-babel');

    gulp.task('babel', function() {
        gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
        gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
    });
    ````


## 7. LINT
* blah blah blah
