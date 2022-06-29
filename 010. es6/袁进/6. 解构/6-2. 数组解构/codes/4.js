// 非同名属性解构
const numbers = ['a', 'b', 'c', 'd', {
  a: 'aaa',
  b: 'bbb'
}];

const [, , , , {
  a: A,
  b,
  c: C = 'ccc'
}] = numbers;
/*
const {
  a: A,
  b,
  c: C = 'ccc'
} = numbers[4]; */

A; // => aaa
b; // => bbb
C; // => ccc