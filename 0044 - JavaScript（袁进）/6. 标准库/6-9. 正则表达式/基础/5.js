var reg = /\d+?/gmi; // => 量词后面加 ? 表示非贪婪模式
var s = "1234abc567ABC";
var n = 0;
while (reg.test(s)) {
  n++;
}

console.log(`匹配了${n}次`); // 匹配了7次
while (result = reg.exec(s)) {
  console.log(result[0]); // 依次输出 1234567
}

/* 说明:
1. 不加量词 ? ==> 表示贪婪模式 ==> 也就是会尽可能多的匹配
2. 加量词 ? ==> 表示非贪婪模式 ==> 也就是会尽可能少的匹配 */