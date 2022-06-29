/*
from方法：可以将一个伪数组转换为真数组
isArray方法：判断一个给定的数据，是否为一个真数组
*/
function test() {
  console.log(arguments); // => Arguments(6) [1, 2, 3, 4, 5, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(Array.isArray(arguments)); // => false
  var newArr = Array.from(arguments);
  console.log(newArr); // (6) [1, 2, 3, 4, 5, 6]
  console.log(Array.isArray(newArr)); // => true
}

test(1, 2, 3, 4, 5, 6)