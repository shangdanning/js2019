//=================================promise对象的简单例子==================================

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
// timeout(3000).then((value) => {
//     console.log(value);
// });

//====================================promise执行顺序=====================================
// let promise = new Promise((resolve, reject) => {
//     console.log('resolve');
//     resolve();
//     setTimeout(() => {
//         console.log('timeout-resolve');
//     }, 0);
// });
// promise.then(() => {
//     console.log('resolved');
// });
// console.log('Hi');

//resolve
// Hi
// resolved

//=======================================自己封装promise==================================
// function Spromise(method) {
//     this.callback = method;


// }
// Spromise.prototype.then = function() {
//     this.callback();

// }
// let a = 'hhh';
// let sp = new Spromise((a) => {
//     console.log('sdn');
// });
// sp.then();

//=============================================================
//Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

// const p1 = new Promise(function(resolve, reject) {
//     console.log('p1');
//     setTimeout(() => {
//         console.log(1);
//         reject(new Error('fail'))
//             // resolve('hhh');
//     }, 3000)
// })

// const p2 = new Promise(function(resolve, reject) {
//     console.log('p2');
//     setTimeout(() => {
//         console.log(2);
//         resolve(p1)
//         console.log(3);
//     }, 1000)
// })

// p2
//     .then(result => console.log(result))
//     .then(() => {
//         console.log('111');
//     }).then(() => {
//         console.log('222');
//     })
//     .catch(error => console.log(error))


//=======================================================================================

// const p1 = new Promise((resolve, reject) => {
//         resolve('hello');
//     })
//     .then(result => result)
//     .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//         throw new Error('报错了');
//         // resolve('qq');
//     })
//     .then(result => result)
//     .catch(e => e);

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e));

// ["hello", Error: 报错了]

//=========================立即resolve()的 Promise 对象========================
//需要注意的是，立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
setTimeout(function() {
    console.log('three');
}, 0);
const p = Promise.resolve('Hello');

p.then(function(s) {
    console.log(s)
});

console.log('one');

//one
// Hello
// three