/*
var arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];
去掉数组中的负数，然后对每一项平方，然后再对每一项翻倍，然后求和 不许使用循环
*/
// var arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];
// var result = arr.filter(function (item) {
//   return item >= 0;
// }).map(function (item) {
//   return item * item;
// }).map(function (item) {
//   return item * 2;
// }).reduce(function (sum, item) {
//   return sum += item;
// }, 0)
// console.log(result);



var arr = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5, -6];
var result = arr.filter((item) => item >= 0)
  .map((item) => item * item)
  .map((item) => item * 2)
  .reduce((sum, item) => sum += item, 0);

console.log(result); // => 182