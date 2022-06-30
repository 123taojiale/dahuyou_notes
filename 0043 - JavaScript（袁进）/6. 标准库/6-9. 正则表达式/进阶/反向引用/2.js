var s = "131313";
var reg1 = /(\d{2})\1\1/; // 写法一
var reg2 = /(\d{2})(\d{2})(\d{2})/; // 写法二
console.log(reg1.exec(s));
console.log(reg2.exec(s));
/* output
[ '131313', '13', index: 0, input: '131313', groups: undefined ]
[
  '131313',
  '13',
  '13',
  '13',
  index: 0,
  input: '131313',
  groups: undefined
]
注意：
  第一种写法，只有一个捕获组
  第二种写法，有三个捕获组
*/
