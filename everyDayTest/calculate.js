// console.log(1 / 2);

// console.log(Infinity * 0);
// console.log(Infinity * Infinity);

//==========================================================

// a = [
//     [1, 2, 3, 4],
//     [2, 3, 4],
//     [3, 4, 5],
//     [4, 5, 6]
// ];
// for (var i = 0, j = 3; i <= 3; i++, j--)
//     console.log("a[" + i + "][" + j + "] = " + a[i][j]);

//==============================================================
// console.log(null === undefined);
// console.log(null == undefined);
// var object1 = {
//         "value": "key"
//     },
//     object2 = {
//         "value": "key"
//     };
// console.log(object1 === object2); //false
// console.log(object1 == object2); //false

//=================================================================
// var object1 = new Object();
// var object2 = new Object();
// console.log(object1 == object2); //false

//=====================================================
// console.log('foo' === 'foo');
// var a = new String('foo');
// var b = new String('foo');

// // false as a and b are Type Object and reference different objects
// console.log(a == b)

// // false as a and b are Type Object and reference different objects
// console.log(a === b)

// // true as a and 'foo' are of different type and, the Object (a) 
// // is converted to String 'foo' before comparison
// console.log(a == 'foo')


//========================逗号运算符=====================================
// var a = (1, 2);
// console.log(a);

//========================解构赋值==================================

// ({ a, b, ...d } = { a: 10, b: 20, c: 30 });
// console.log(a); // 10
// console.log(b); // 20
// console.log(d); // 20

// var [a, ...b, c] = [1, 2, 3];//会报错，因为剩余元素必须是数组的最后一个元素


function parseProtocol(url) {
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

    var [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"