//以下products代理会计算传值并根据需要转换为数组。
// 这个代理对象同时支持一个叫做 latestBrowser的附加属性，这个属性可以同时作为 getter 和 setter。
let products = new Proxy({
    browsers: ['Internet Explorer', 'Netscape']
}, {
    get: function(obj, prop) {
        // 附加属性
        if (prop === 'latestBrowser') {
            return obj.browsers[obj.browsers.length - 1];
        }
        // 缺省行为是返回属性值
        return obj[prop];
    },
    set: function(obj, prop, value) {
        // 附加属性
        if (prop === 'latestBrowser') {
            obj.browsers.push(value);
            return;
        }
        // 如果不是数组则进行转换
        if (typeof value === 'string') {
            value = [value];
        }
        // 缺省行为是保存属性值
        obj[prop] = value;
    }
});
console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // ?传入一个 string (错误地)
console.log(products.browsers); // ['Firefox'] <- ?没问题, ?得到的是一个 array
products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'