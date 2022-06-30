/*
reduce：统计，累计
*/

var arr = [1, 2, 5, 3];

var sum = arr.reduce(function (s, item) {
  console.log("回调", s, item);
  return s + item;
}, 0); // 第二个参数 0 作为一个初始值传给 s
// 第二个参数可以防止数组为空 ==> error
// 如果写了第二个参数 那么当数组为空时 直接将第二个参数作为结果返回
console.log(sum); // 11

/*
 回调 0 1
 回调 1 2
 回调 3 5
 回调 8 3 // 表达式的值 ==> 最后一次 return 的结果
 11
*/