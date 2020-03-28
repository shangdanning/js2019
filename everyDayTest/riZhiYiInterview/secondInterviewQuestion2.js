var str = "19216844";
//8位
//x+y+z+m=8
//x、y、z、m初始化为1,最多3位
//192.168.1.1
//192.16.81.1
//192.1.68.11
//4-12位

//只针对8位  且值都不超过255
//3.3.1.1    2.2.2.2    3.1.3.1  1.1.3.3    1.3.3.1    3.1.1.3   1.3.1.3
function outIPArrays(str) {
  var result = [],
    temp = [],
    last = 0,
    mark = false;
  var ipNumsMayBe = [
    [1, 1, 3, 3],
    [1, 2, 2, 3],
    [1, 3, 2, 2],
    [1, 3, 3, 1],
    [1, 3, 1, 3],
    [2, 2, 2, 2],
    [3, 1, 1, 3],
    [3, 1, 3, 1],
    [3, 3, 1, 1],
    [3, 1, 2, 2],
    [3, 2, 1, 2],
    [3, 2, 2, 1]
  ];
  for (let index = 0; index < ipNumsMayBe.length; index++) {
    last = 0;
    temp = [];
    for (let item = 0; item < 4; item++) {
      let ipValue = str.slice(last, last + ipNumsMayBe[index][item]);
      let ipValueNum = parseInt(ipValue);
      if (ipValueNum >= 0 && ipValueNum <= 255) {
        temp.push(ipValue);
        last += ipNumsMayBe[index][item];
      } else {
        temp = [];
        break;
      }
    }
    // console.log(temp);
    temp.length != 0 && result.push(temp.join("."));
  }
  return result;
  //   var ipNums=[1,1,1,1],ipActualNums=[1,1,1,1],
  //     len = str.length;
  //     for (let index = 0; index < 4; index++) {
  //         ipActualNums[index]=len-

  //     }
}
console.log(outIPArrays(str));
