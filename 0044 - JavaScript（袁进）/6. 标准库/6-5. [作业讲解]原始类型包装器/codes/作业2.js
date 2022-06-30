/*
将一个字符串中单词之间的空格去掉，然后把每个单词首字母转换成大写
比如："hello world" -> "HelloWorld" 大驼峰命名法
测试字符串："hello      woRld        js"
*/
var s = "hello      woRld        js";

function bigCamel(s) {
  var result = "";
  var empties = " \t\r\n"; // 记录所有的空白字符
  for (var i = 0; i < s.length; i++) {
    if (empties.includes(s[i])) continue; // 若是空白字符，则直接进入下一次循环。

    // 判断 s[i] 是首字母 ==> i === 0 或者 s[i-1] 是空白字符
    if (i === 0 || empties.includes(s[i - 1])) {
      result += s[i].toUpperCase();
    } else {
      result += s[i];
    }
  }
  return result;
}
console.log(bigCamel(s)); // => HelloWoRldJs

