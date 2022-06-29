var s = "afg43223444wr423424243";
var reg = /[a-zA-Z](?!\d+)/g;
while (result = reg.exec(s)) {
  console.log(result[0]); // a f w
}
/*
需求：找字母，要求改字母后面跟的不是数字。
负向断言(预查) ==> 检查某个字符后面的字符是否不满足某个规则，该规则不成为匹配结果，并且不称为捕获组。
*/