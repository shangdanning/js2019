//() ()() (()  ())(
//优化：第一步判断两边括号的数量是否相等  若否则为false
//关键：将左括号存在栈里，遇到右括号则取出一个，最终如果栈里没值取出或者有剩余则为false
function test(value) {
  var result = true,
    count = 0;
  for (let index = 0; index < value.length; index++) {
    let tempValue = value.charAt(index);
    if (tempValue === "(") {
      count += 1;
    } else if (tempValue === ")") {
      count -= 1;
      if (count < 0) {
        result = false;
        break;
      }
    }
  }
  result && count != 0 && (result = false);
  return result;
}
console.log(test(""));
console.log(test("("));
console.log(test(")"));
console.log(test("))"));
console.log(test("()"));
console.log(test("(())()"));
console.log(test("(())"));
console.log(test("(()"));
console.log(test("()()"));
console.log(test("())("));
