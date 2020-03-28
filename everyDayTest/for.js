//=====================================================
let school = {
    teachers: 34,
    students: 50,
    class: 4,
    tech() {
        console.log("let us learn!!")
    }
}
for (let key in school) {
    console.log(school[key]);
}
//========================================================
let names = ['li', 'wang', 'zhang'];
for (let item in names) {
    console.log(names[item]);
}
console.log(Object.getOwnPropertyNames(names));

//==========================================================
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
    this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
    //   if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
    //   } 
}