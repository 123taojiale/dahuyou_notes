/*
在严格模式下 arguments 和形参之间不存在映射关系
*/
'use strict'

function test(a, b) {
  console.log('arguments:', arguments[0], arguments[1]);
  console.log('a:', a, 'b:', b);
  a = 3;
  console.log('arguments:', arguments[0], arguments[1]);
  console.log('a:', a, 'b:', b);
}

test(1, 2);
/* output
arguments: 1 2
a: 1 b: 2
arguments: 1 2
a: 3 b: 2
*/