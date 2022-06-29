/*
反向引用的应用举例 ==> 面试题
需求：找出该字符串中连续的字符（不包含只出现一次的字符）
*/
var s = "aaaaaaaabbbbbbbbbccccccdefgggggggg";

var reg1 = /(\w)\1+/g;
var reg2 = /(?<char>\w)\1+/g; // 虽然捕获组有了名字，但依旧可以使用编号来引用。
var reg3 = /(?<char>\w)\k<char>+/g; // 使用名字来引用

while (result = reg1.exec(s)) {
  // console.log(result);
  console.log(result[1]); // => a b c g
}
while (result = reg2.exec(s)) {
  console.log(result[1]); // => a b c g
}
while (result = reg3.exec(s)) {
  console.log(result[1]); // => a b c g
}