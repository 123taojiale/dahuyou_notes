/*
includes: 数组中是否包含满足条件的元素
*/
var arr = [32, 6, 67, 5, 23, 4];
// 从数组下标3的位置开始寻找，目标是67
console.log(arr.includes(67)); // true 从下标为 0 的位置开始找 67
console.log(arr.includes(67, 3)); // false 从下标为 3 的位置开始找 67 （从数字5开始）



// 对象没法找
var arr1 = [
  { x: 1, y: 2 },
  { x: 3, y: 4 }
];

console.log(arr1.includes({
  x: 1,
  y: 2
})); // false