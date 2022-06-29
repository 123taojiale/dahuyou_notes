var reg = /(\d[a-z])([a-z]+)/g;
var s = "2afsdf-5fdgdfg-9asddf";
while (result = reg.exec(s)) {
  console.log(result);
}
/*
用小括号包裹起来的部分叫做捕获组，捕获组会出现在匹配结果中。
结果数组中下标 0 的成员，仍然表示整个正则表达式的匹配结果。
捕获组 ==> 会出现在匹配结果的数组里头。
多出来的两个下标 1 和 2 分别表示的是两个小括号() 也就是捕获组 匹配的内容。
*/
/* output
[
  '2afsdf',
  '2a',
  // => 捕获组捕获的内容
  'fsdf',
  // => 捕获组捕获的内容
  index: 0,
  input: '2afsdf-5fdgdfg-9asddf',
  groups: undefined
]
[
  '5fdgdfg',
  '5f',
  // => 捕获组捕获的内容
  'dgdfg',
  // => 捕获组捕获的内容
  index: 7,
  input: '2afsdf-5fdgdfg-9asddf',
  groups: undefined
]
[
  '9asddf',
  '9a',
  // => 捕获组捕获的内容
  'sddf',
  // => 捕获组捕获的内容
  index: 15,
  input: '2afsdf-5fdgdfg-9asddf',
  groups: undefined
]
 */