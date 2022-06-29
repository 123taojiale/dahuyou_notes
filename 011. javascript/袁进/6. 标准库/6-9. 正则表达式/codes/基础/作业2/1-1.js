// 书写一个正则表达式，去匹配一个字符串，得到匹配的次数，和匹配的结果。
var reg = /\d{3}/g;
var s = "433afdsaf34542fsdssfsd234";
var n = 0;
var str = "";
while (result = reg.exec(s)) {
  n++;
  str += result[0] + "\n";
}
str = `匹配${n}次\n` + str;
console.log(str);
/*
匹配3次
433
345
234
*/