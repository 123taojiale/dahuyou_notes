const numbers = [13, 65, 234, 56, 26];
// 注意: 剩余参数 (剩余项) 必须放在最后
const [num1, num2, ...nums] = numbers; // 数组的前两项 分别放到变量 num1 和 num2 中 其余项组成新数组放到 nums 中

num1; // => 12
num2; // => 65
nums; // => [ 234, 56, 26 ]
numbers; // => [ 13, 65, 234, 56, 26 ]