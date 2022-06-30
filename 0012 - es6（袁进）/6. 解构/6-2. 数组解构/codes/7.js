// 使用以前的写法来实现相同的效果
const numbers = [13, 65, 234, 56, 26];

const num1 = numbers[0],
  num2 = numbers[1],
  nums = numbers.slice(2); // numbers.splice(2);

num1; // => 12
num2; // => 65
nums; // => [ 234, 56, 26 ]
numbers; // => [ 13, 65, 234, 56, 26 ]