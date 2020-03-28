//==============================yield*================================

// var arr = [1, [
//         [2, 3], 4
//     ],
//     [5, 6]
// ];

// var flat = function*(a) {
//     var length = a.length;
//     for (var i = 0; i < length; i++) {
//         var item = a[i];
//         if (typeof item !== 'number') {
//             yield* flat(item);
//         } else {
//             yield item;
//         }
//     }
// };
// // console.log(flat(arr));

// // var res = flat(arr);
// // console.log(res.next());
// // console.log(res.next());
// // console.log(res.next());
// // console.log(res.next());
// // console.log(res.next());
// for (var f of flat(arr)) {
//     console.log(f);
// }
//==========================yield表达式用在表达式里面，必须加括号============================
// function* demo() {
//     // console.log('Hello' + yield); // SyntaxError
//     // console.log('Hello' + yield 123); // SyntaxError
//     console.log(1);
//     console.log('Hello' + (yield)); // OK
//     console.log(2);
//     console.log('Hello' + (yield 123)); // OK
//     console.log(3);
// }

// var res = demo();
// res.next();
// res.next();
// res.next();
// // res.next();
// // res.next();
// // res.next();
// // res.next();

// // console.log(res.next());
// // console.log(res.next());
// // console.log(res.next());

//==============================================================

// function* dataConsumer() {
//     console.log('Started');
//     console.log(`1. ${yield}`);
//     console.log(`2. ${yield}`);
//     return 'result';
// }

// let genObj = dataConsumer();
// genObj.next();
// // Started
// genObj.next('a')
//     // 1. a
//     // genObj.next('b')


//===================================================================
// Generator 函数和for...of循环，实现斐波那契数列的例子。

// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for (;;) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
// }

//===========================================================
//原生的 JavaScript 对象没有遍历接口，无法使用for...of循环，通过 Generator 函数为它加上这个接口，就可以用了。

// function* objectEntries(obj) {
//     let propKeys = Reflect.ownKeys(obj); //获取对象的属性数组
//     console.log(JSON.stringify(propKeys));

//     for (let propKey of propKeys) {
//         yield [propKey, obj[propKey]];
//     }
// }

// let jane = { first: 'Jane', last: 'Doe' };

// for (let [key, value] of objectEntries(jane)) {
//     console.log(`${key}: ${value}`);
// }
// // first: Jane
// // last: Doe
//==========================throw===================================

// const g = function*(x, y) {
//     let result = yield x + y;
//     return result;
// };

// const gen = g(1, 2);
// console.log(gen.next()); // Object {value: 3, done: false}

// //   gen.next(1); // Object {value: 1, done: true}
// //   // 相当于将 let result = yield x + y
// //   // 替换成 let result = 1;

// gen.throw(new Error('出错了'));

//==============================yield*==========================================

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
}

function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
}

console.log([...logReturned(genFuncWithReturn())]);
// The result
// 值为 [ 'a', 'b' ]