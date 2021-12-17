var arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];
// 去掉数组中的负数， 然后对每一项平方， 然后再对每一项翻倍， 然后求和
// 不许使用循环

var result = arr.filter(function (item) {
  return item >= 0;
}).map(function (item) {
  return item ** 2;
}).map(function (item) {
  return item * 2;
}).reduce(function (s, item) {
  return s + item;
}, 0);

console.log(result); // 182