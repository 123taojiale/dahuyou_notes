// 正向断言(预查) ==> ?= ==> 检查某个字符后面的字符是否满足某个规则，该规则不成为匹配结果，并且不成为捕获组
var s = "sdfsdf3434343sdfsa545454dfsdfsfsd6754";
var reg = /[a-zA-Z](?=\d+)/g;
while (result = reg.exec(s)) {
  // console.log(result[0]); // f a d
  console.log(result);
}
/*
需求：找字母，要求此字母的后面是数字。
[
  'f',
  index: 5,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
[
  'a',
  index: 17,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
[
  'd',
  index: 32,
  input: 'sdfsdf3434343sdfsa545454dfsdfsfsd6754',
  groups: undefined
]
*/