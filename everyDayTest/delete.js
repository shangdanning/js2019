//=========================非严格模式下，只会返回flase，不会抛出异常===================================
// var nameOther = 'XYZ';

// // 通过以下方法获取全局属性:
// console.log(Object.getOwnPropertyDescriptor(window, 'nameOther'));

// // 输出: Object {value: "XYZ", 
// //                  writable: true, 
// //                  enumerable: true,
// //                  configurable: false}

// // 因为“nameOther”使用var关键词添加，
// // 它被设置为不可设置（non-configurable）
// delete nameOther; // return false

//==========================严格模式下，删除不可以删除的，则会报错======================================
// "use strict";

// function Employee() {
//     delete salary; // SyntaxError
//     var salary;
// }

// // 相似的，任何对任何函数
// // 直接使用delete操作将会抛出语法错误。

// function DemoFunction() {
//     //some code
// }

// delete DemoFunction; // SyntaxError

//========================================================================

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
console.log(trees);