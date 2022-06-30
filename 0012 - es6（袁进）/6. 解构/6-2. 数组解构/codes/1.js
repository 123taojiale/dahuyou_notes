const numbers = ['a', 'b', 'c', 'd'];

const {
  0: num1,
  1: num2,
  3: num4,
} = numbers;
/*
let num1, num2, num4;
([num1, num2, , num4] = numbers); */
/*
const [num1, num2, , num4] = numbers */

num1; // => a
num2; // => b
num4; // => d
numbers[0]; // => a
numbers[1]; // => b
numbers[3]; // => d