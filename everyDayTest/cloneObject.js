let a = {
        name: "sdn",
        age: 26,
        hobby: "sing"
    },
    b = {
        name: "sss",
        age: 26
    };
a.mm = 'mm';
b.hh = 'hh';
let c = {
    ...a
};
let d = {
    ...a,
    ...b
};
a.sex = 'female';
b.sex = 'male';
console.log('c', c);
console.log('d', d);
console.log('a', a);
console.log('b', b);