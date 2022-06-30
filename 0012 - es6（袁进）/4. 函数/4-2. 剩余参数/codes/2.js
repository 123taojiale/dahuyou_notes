/* 需求：实现不定参求和
做法2：使用 arguments
*/
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
sum(1); // => 1
sum(1, 2); // => 3
sum(1, 2, 3); // => 6
sum(1, 2, 3, 4); // => 10

/*
此时 sum 在定义的时候 明明没有定义形参
但是该函数实际上是在内部通过 arguments 来处理接收到的形参
这样的做法 无法从函数定义上理解函数的真实意图
*/