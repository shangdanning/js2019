//==============解构赋值================
//三点运算符必须放在最后
// var [a, ...b] = [1, 2, 3];
// console.log(b);


//===================================
//展开运算符在函数调用时，可以不放在最后一位
// function myFunction(v, w, x, y, z) {
//     console.log(arguments);
// }
// var args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);
// myFunction(-1, ...args, ...args);

//===================展开运算符一旦赋值后，新值将不受原值影响，除非是原型链上的======================
// var a = [
//     [1],
//     [2],
//     [3]
// ];
// var b = [...a];
// var c = a;
// a.push([4]);
// console.log('b', b);
// console.log('a', a);
// console.log('c', c);

//===================浅拷贝，会把自己属性和原型链上的属性/方法都拷贝========================
let a = {
    name: "sdn"
};
let b = {
    age: 26,
    m() {}
};
a.prototype = b;
let c = {...a };
console.log(c);
a.hhh = "hhh";
b.age = 28;
console.log(c);
console.log(b);
console.log(a);


//============================================================
// function sortArguments() {
//     //将类数组转成真正的数组
//     var args = Array.prototype.slice.call(arguments);
//     var sortedArgs = args.sort();
//     return sortedArgs;
// }
// console.log(sortArguments(5, 3, 7, 1)); // shows 1, 3, 5, 7