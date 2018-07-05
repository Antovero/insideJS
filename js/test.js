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

var arr = ['a','b','c'];

arr.push('three');
console.log(arr);

arr.length = 5;

arr.push('four');
console.log(arr);

