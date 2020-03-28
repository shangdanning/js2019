//============================函数提升===============================
// if (true) {
//     function fool() {
//         console.log(1);
//     }
// }
// fool();
// console.log(fool);
//===========================函数也是一个对象====================================

// function fool() {
//     console.log(1);
// }
// fool.age = "hhh";
// for (let key in fool) {
//     console.log(key);
// }
// console.log(fool);
// console.log(fool.age);

//===============================================================
// console.log(
//     import.meta);

//==============================================================

function Person() {
    this.name='aa';
}
Person.prototype={};
var a=new Person();
// console.log(a.constructor===Person);
// console.log(Person.constructor===Function);
// console.log(Function)
console.log(Person.apply.toString());



//===============函数声明和函数表达式==================
(function name() {
    var a=1;
    console.log(nameAnother);
    function nameAnother() {
        var b=2
        function nameOther() {
            var c=3;
        }
    }
})()
