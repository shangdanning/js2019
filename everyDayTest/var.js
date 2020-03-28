// var x = 'global';
// let y = 'global';
// console.log(this.x); // "global"
// console.log(window.x);

//=====================非声明变量============================
//非声明变量只有在执行赋值操作的时候才会被创建

// console.log(a);
// a = 1;
// console.log(a);

//=============================================================
// console.log(bla);
// bla = 2
// console.log(bla);
// var bla;
// console.log(bla);

//=======================let和const都是块级作用域=======================
{
    const a = 1;
}
console.log(a);

// let a = 1; 
// {
//     console.log(a);
// }