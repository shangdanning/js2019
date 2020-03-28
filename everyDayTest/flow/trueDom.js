var div = document.createElement('div');
var str = '';
let num = 0;
for (let key in div) {
    str += ++num + key + '';
}
//一个div有300多个属性
console.log(str);