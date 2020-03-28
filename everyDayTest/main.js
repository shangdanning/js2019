//====================块作用域和val==============================
// var x = 1; {
//     var x = 2;
// }
// console.log(x); // 输出 2
//====================函数声明同样被限制在声明他的语句块内==========
// foo('outside'); // TypeError: foo is not a function
// {
//     function foo(location) {
//         console.log('foo is called ' + location);
//     }
//     foo('inside'); // 正常工作并且打印 'foo is called inside' 
// }
//=====================break标记块语句===========================
//一个 break 语句必须内嵌在它引用的标记中

// foo: {
//     console.log('face');
//     break foo;
//     console.log('this will not be executed');
// }
// console.log('swap');

//=======================class==================================
// class Polygon {
//     constructor(height, width) {
//         this.area = height * width;
//     }
// }
// console.log(new Polygon(4, 3).area);

// class Polygon {
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
// }

// class Square extends Polygon {
//     constructor(length) {
//         super(length, length);
//         this.name = 'Square';
//     }
// }

//===========================函数和函数表达式不可以重复定义=======================================

// function my() {}
// let my = function() {}
//===========================类和类表达式不可以重复定义=======================================

// class Foo {}
// let Foo = class {

// }

//=========================var变量可以重复定义，而let和const在同一块作用域不可以重复定义=============================

// var a = 1;
// var a = 2;

//======================全局变量会变为窗口对象的属性=========================
// var a = 2;
// // debugger;
// console.log(window.a);

//========================块级作用域内不可以重复声明==================

// let a = 3;

// function a() {
//     console.log(3);
// }