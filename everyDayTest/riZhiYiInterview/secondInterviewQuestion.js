var array = [-1, 2, 8, 3, 1, 4, 6];
//O(n)
//5
//-1 1 2 3 4
function compare(a, b) {
  return a - b;
}
// function calculate(params) {
//     let newArray=params.sort(compare);
//     console.log(newArray);
//     newArray
// }
//1 2 3 4 5 6 7
function calculate(params) {
  var result = 1;
  for (let index = 1; index < params.length + 1; index++) {
    if (params.indexOf(index) == -1) {
      result = index;
      break;
    }
  }

  return result;
}
console.log(calculate(array));
//object