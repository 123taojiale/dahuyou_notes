// 深层次解构
const numbers = ['a', 'b', 'c', 'd', [1, 2, 3, 4]];

const [, , , , [, , num3]] = numbers;

num3; // => 3