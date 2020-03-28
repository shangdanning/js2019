for (let index = 0; index < value.length; index++) {
    //满足 除2余数为0 为（  ;除2余数为1 为)  为true
    //满足 除2余数为0 为) 或者 除2余数为1 为（  为false
    let temp = index % 2;
    console.log(temp, value.charAt(index));
    if (
      (temp === 0 && value.charAt(index) === ")") ||
      (temp === 1 && value.charAt(index) === "(")
    ) {
      result = false;
      break;
    }
  }
//=========================使用入栈、出栈思想=================================

  let tempValue = value.charAt(index);
  if (tempValue === "(") {
    stack.push(tempValue);
  } else if (tempValue === ")") {
    let popValue = stack.pop();
    if (!popValue) {
      result = false;
      break;
    }
  }