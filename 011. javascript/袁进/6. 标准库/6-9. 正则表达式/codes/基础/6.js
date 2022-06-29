// 贪婪模式
var reg = /\d+/gmi;
var s = "1234abc123ABC";
var n = 0;
while (reg.test(s)) {
  n++;
}
console.log(`匹配了${n}次`); // 匹配了2次
while (result = reg.exec(s)) {
  console.log(result[0]); // 第一次输出 1234 第二次输出 567
}