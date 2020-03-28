function C() {}

function D() {}

//==也就是加不加括号是没有区别的
var o = new C;
console.log(o);
var o1 = new C();
console.log(o1);
C.prototype = {
    name: "sdn"
};
var m = new C();
console.log(m);
console.log(o.constructor.prototype.name); //sdn
console.log(o.name); //undefined
console.log(o instanceof C); //false


console.log(Object.prototype.toString.call([1, 2, 3]));