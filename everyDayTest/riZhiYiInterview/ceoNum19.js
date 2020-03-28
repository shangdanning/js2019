//19位数 第一位为0，最后一位也是0  中间不能出现2个0，或者3个1
var arrayList = [];
function createStr(str = "0") {
  while (str.length < 19) {
    str += getNextNum(str);
  }
  str[str.length - 1] === "0" && arrayList.push(str);
}
function getNextNum(str) {
  let temp = str[str.length - 1];
  //如果当前字符串最后一位为0，则返回1
  if (temp === "0") {
    return "1";
  }
  //如果当前字符串最后一位为1，判断前一个字符串若为0，则新增一种串‘011’
  let tempFore = str[str.length - 2];
  if (tempFore === "0") {
    createStr(str + "1");
  }
  //以下return 包含010 和110两种情况
  return "0";
}
createStr();
console.log("共" + arrayList.length + "种字符串");
console.log(arrayList);
//共65种