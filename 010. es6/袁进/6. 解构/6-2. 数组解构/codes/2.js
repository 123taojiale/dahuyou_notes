// 使用默认值
const numbers = ['a', 'b', 'c', 'd'];

const [num1, num2, , num4, num5, num6 = 123] = numbers

num1; // => a
num2; // => b
num4; // => d
num5; // => undefined
num6; // => 123