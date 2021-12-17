const path = require('path');
console.log("100" - 50); // => 50
console.log(Math.floor("foo")); // => NaN
console.log(Math.floor(true)); // => 1
console.log(path.dirname('./foo/bar/abc.txt')); // => '/foo/bar'
console.log(path.dirname(123)); // => TypeError
/*
虽然最后一个报错了，但是，这并不能说明 javascript 是强类型的。
因为语法上并没有报错，这个错误其实是在 node 源码中，使用逻辑判断来抛出的。
*/