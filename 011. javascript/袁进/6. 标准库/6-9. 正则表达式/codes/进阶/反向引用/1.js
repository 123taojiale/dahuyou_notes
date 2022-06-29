// 反向引用 ==> 在正则表达式中，使用某个捕获组 ==> 使用: \捕获组编号
// 捕获组编号 参考 ==> https://blog.csdn.net/tao_sheng_yi_jiu/article/details/80369026
var reg = /(\d{2})\1\1/;
var s = "131313";
var s1 = "202020";
var s2 = "202120";

console.log(reg.test(s)); // true
console.log(reg.test(s1)); // true
console.log(reg.test(s2)); // false