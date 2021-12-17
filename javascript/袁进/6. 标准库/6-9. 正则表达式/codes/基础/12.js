var s = "hello world";
s.replace(/\b[a-z]/g, ","); // => ,ello ,orld
// 回调函数式写法：
s.replace(/\b[a-z]/g, function (match) {
  console.log(match); // 第一个参数表示匹配的内容
  return ","; // 返回值 作为替换内容
}); // => ,ello ,orld

/*
需求：将单词的首字母 替换为 逗号
str.replace 语法 ==> 第二个参数可以是一个函数
str.replace(regexp|substr, newSubStr|function)
相关参数说明：
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/