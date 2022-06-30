/*
fill方法：用某个数据填充数组
*/
var arr = new Array(10)
console.log(arr); // (10) [empty × 10]
console.log(arr.length); // => 10
arr.fill("abc");
console.log(arr); // (10) ["abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc"]