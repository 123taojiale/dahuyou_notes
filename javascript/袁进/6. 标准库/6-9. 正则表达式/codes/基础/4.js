var s = "1234abc123ABC";
var reg = /\d+/gmi;
var n = 0;
while (reg.test(s)) {
  n++;
}
console.log(`匹配了${n}次`); // 匹配了2次