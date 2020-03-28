var myIterable = {};
myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
};
// console.log(myIterable);
let res = [1, 2, 3];
res.forEach((item) => {
    console.log(item);
});
let array = [...myIterable];
console.log(JSON.stringify(array));
for (let iterator of myIterable) {
    console.log(iterator);
}
//总结：三点运算符和for of很像，都是遍历