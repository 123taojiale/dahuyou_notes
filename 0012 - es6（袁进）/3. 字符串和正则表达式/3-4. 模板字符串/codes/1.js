/*
在 ES6 之前 处理换行的几种常见写法
*/
const str1 = 'this is first line.\nthis is second line.'; // 输出的内容也会换行显示

const str2 = 'this is first line.\
this is second line.';

const str3 = [
  'this is first line.',
  'this is second line.'
].join('\n');

/* str1、str2、str3 的输出都相同：
this is first line.
this is second line.
*/