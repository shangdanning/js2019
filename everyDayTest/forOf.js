// let iterable = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3]
// ]);
// for (let entry of iterable) {
//     console.log(entry);
// }
// for (let [key, value] of iterable) {
//     console.log(key, value);
// }
//===================================
let iterable = [3, 5, 7];
iterable.foo = 'hello';
for (let iterator of iterable) {
    console.log(iterator);
}
for (let iterator in iterable) {
    console.log(iterator);
}
//================对象是不可以用for of迭代的====================
// let myObject = {
//         name: "sdn",
//         age: 26,
//         sex: "girl"
//     }
//     //以下语句不报错
// for (let iterator in myObject) {
//     console.log(iterator);
// }
// //以下语句报错
// for (let iterator of myObject) {
//     console.log(iterator);
// }
//==========================立即执行===================================
// (function() {
//     for (let argument in arguments) {
//         console.log('in ' + argument);
//     }
//     for (let argument of arguments) {
//         console.log('of ' + argument);
//     }
// })(1, 2, 3);

//=====================================================================
// function go(n) {
//     // n here is defined!
//     console.log(n); // Object {a: [1,2,3]}
//     let arr = [0, 1, 2]
//     for (let m of n.a) { // ReferenceError
//         console.log(m);
//     }
//     for (let n of arr) { // ReferenceError
//         console.log(n);
//     }
// }

// go({
//     a: [1, 2, 3]
// });