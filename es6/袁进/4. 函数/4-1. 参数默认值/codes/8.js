/*
使用了函数参数默认值 自动转化为 严格模式
*/
function test(a = 1, b) {
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