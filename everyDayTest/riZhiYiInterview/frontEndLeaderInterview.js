//堆栈
//stack;

//push pop getMaxValue
//栈只存正整数
//O(1) 空间换时间 用其他的数据结构
//5 3 2 7
//5 7
//原子操作
function stack() {
  this.orign = [];
  this.maxValueArray = []; //与最大值有关
}
stack.prototype.push = function(value) {
  if (
    this.maxValueArray.length == 0 ||
    value >= this.maxValueArray[this.maxValueArray.length - 1]
  ) {
    this.maxValueArray.push(value);
  }
  this.orign.push(value);
};
stack.prototype.pop = function() {
  var temp = this.orign.pop();
  if (temp >= this.maxValueArray[this.maxValueArray.length - 1]) {
    this.maxValueArray.pop();
  }
};
stack.prototype.getMaxValue = function() {
  //   return Math.max.apply(Math, this.orign); //O(n)
  return this.maxValueArray[this.maxValueArray.length - 1];
};
var stackValue = new stack();

stackValue.push(1);
stackValue.push(6);
stackValue.push(7);
stackValue.push(5);
console.log(stackValue.orign);
stackValue.pop();
console.log(stackValue.orign);
console.log(stackValue.getMaxValue());
// console.log(stackValue.orign);
