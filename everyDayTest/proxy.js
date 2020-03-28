// let obj = {};
// let handler = {
//     get(target, property) {
//         console.log(`${property}被读取`);
//         return property in target ? target[property] : 3;
//     },
//     set(target, property, value) {
//         console.log(`${property} 被设置为${value}`);
//         target[property] = value;
//     }
// }
// let p = new Proxy(obj, handler);
// p.name = 'tom';
// console.log(p.age);

//=================================================================================================

// var x = { p: 1 };
// var obj = new Proxy(x, {
//     get(t, k, r) { return k + "bar"; }
// });
// console.log(obj['foo']);
// console.log(Reflect.get(obj, "foo")); // "foobar"


//===========================================mdn案例======================================================

let p1 = new Proxy({}, {});
p1.a = 1;
console.log(p1.a);

//=======无操作转发代理========
let target = {};
let p = new Proxy(target, {});
p.a = 37; // 操作转发到目标
console.log(target.a); // 37. 操作已经被正确地转发