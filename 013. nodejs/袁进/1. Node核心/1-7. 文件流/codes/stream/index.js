const {
  Writable, // => 可写流
  Readable // => 可读流
} = require("stream");

console.log(typeof Writable); // => function
console.log(typeof Readable); // => function

/*
stream 模块里面包含两个类：
Writable、Readable
我们后边学习的 网络流、文件流... 都是继承自这两个类的。
所以，这些流都具有一些共同的成员，我们在文件流中所用到的一些成员和方法，在后边学习其他流的时候，它们都是通用的。
*/