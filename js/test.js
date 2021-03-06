// var a = 50;
// var objA = { value: 50 };

// function changeArg(num, obj){
//     num = 200;
//     obj.value = 200;
//     console.log(num);
//     console.log(obj);
// }
// changeArg(a, objA);

// console.log(a);
// console.log(objA);

// 3.3
// var foo = {
//     name: 'foo',
//     age: 30
// };
// console.log(foo.toString());
// console.dir(foo);


//3.5.1
// var colorArr = ['orange','yellow','blue','green','red'];
// console.log(colorArr[0]);
// console.log(colorArr[1]);
// console.log(colorArr[4]);

//3.5.2
// var emptyArr = [];
// console.log(emptyArr[0]);
// emptyArr[0] = 100;
// emptyArr[3] = 'eight';
// emptyArr[7] = true;
// console.log(emptyArr);
// console.log(emptyArr.length);

// var arr = ['a','b','c'];
// arr.push('three');
// console.log(arr);
// arr.length = 5;
// arr.push('four');
// console.log(arr);

//add() 함수 표현식
// var add = function(x, y){
//     return x + y ;
// };
// var plus = add;
// console.log(add(3,4));
// console.log(plus(5,5));

//함수 표현식  + 함수 호이스팅
//console.log(add(2,3));

// var add = function(x, y){
//     return x + y;
// };

// console.log(add(3,4));


//함수 선언 방식으로 add()함수 정의
// function add(x, y){
//     return x+y;
// }
// add.result = add(3, 2);
// add.status = 'OK';
// console.log(add.result);
// console.log(add.status);

// var foo = 100;
// var bar = function(){
//     return 100;
// };
// console.log(bar());
// var obj = {};
// obj.baz = function(){ return 200; }
// console.log(obj.baz());


//함수를 다른 함수의 인자로 넘기는 코드
// var foo = function(func){
//     func();
// };
// foo(function(){
//     console.log('function!!!');
// });

//함수를 리턴하는 foo() 함수 정의
// var foo = function(){
//     return function(){
//         console.log('this function is the return value.');
//     };
// };
// var bar = foo();
// bar();

// function add(x, y){
//     return x + y;
// }
// console.dir(add);

//MyFunction() 함수 정의
// function myFuntion(){
//     return true;
// }

// console.dir(myFuntion.prototype);

//클로저 예제
// function parent(){
//     var a = 100;
//     var child = function(){
//         console.log(a);
//     }
//     return child;
// }
// var inner = parent();
// inner();

// var self = function(){
//     console.log('a');
//     return function(){
//         console.log('b');
//     }
// }

// self = self();
// self();


//객체의 메서드 호출 시 this 바인딩
// var myObject = {
//     name: 'foo',
//     sayName: function(){
//         console.log(this.name);
//     }
// };
// var otherObject = {
//     name: 'bar'
// };
// otherObject.sayName = myObject.sayName;
// myObject.sayName();
// otherObject.sayName();


//전역 변수 value 정의
var value = 100;

//myObject 객체 생성
var myObject = {
    value: 1,
    func1: function(){
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);
        
        func2 = function(){
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);
            
            func3 = function(){
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};
myObject.func1();

//aaaa

