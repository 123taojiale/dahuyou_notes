var s = "hello world\tjavascript\nyes";
var result = s.split(/[, \-\t]/); // 将所有分割结果以字符串数组的形式返回
console.log(result); // => ["hello", "world", "javascript↵yes"]

// 第二个参数n的作用 ==> 取分割后的前n个
var result2 = s.split(/[, \-\t]/, 2); // 取前两个
console.log(result2); // => ["hello", "world"]