/*
在调用函数时，将数组中的值当做形参传入。
*/
function test(a, b, c) {
  console.log(a, b, c);
}

const arr = [1, 2, 3];

test(...arr); // => 1 2 3