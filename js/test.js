
var a = 50;
var objA = { value: 50 };

function changeArg(num, obj){
    num = 200;
    obj.value = 200;
    console.log(num);
    console.log(obj);
}
changeArg(a, objA);

console.log(a);
console.log(objA);
