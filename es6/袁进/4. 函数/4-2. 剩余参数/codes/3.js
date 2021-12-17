/* 需求：实现不定参求和
做法3：使用剩余参数
*/
function sum(...args) {
  console.log(args, Array.isArray(args));
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

sum(); // => 0
sum(1); // => 1
sum(1, 2); // => 3
sum(1, 2, 3); // => 6
sum(1, 2, 3, 4); // => 10