/*
变量提升，导致的怪异的数据访问。
输出的结果 有可能是两个 undefined 也有可能是两个 abc
*/
if (Math.random() < 0.5) {
  var a = 'abc';
  console.log(a);
} else {
  console.log(a);
}

console.log(a);
/* 等效程序
var a;
if (Math.random() < 0.5) {
  a = 'abc';
  console.log(a);
} else {
  console.log(a);
}

console.log(a);
*/
/*
正常的阅读代码：
  如果随机数小于 0.5 那么声明一个变量 a 并赋值为 'abc' 随后输出 a
  如果随机数不小于 0.5 那么直接输出 a
  输出 a
实际上：
  先在全局声明一个变量 a （变量提升）
  如果随机数小于 0.5 那么将全局的变量 a 赋值为 'abc' 随后输出 a
  如果随机数不小于 0.5 那么直接输出 a
  输出 a

如果在其他编程语言中，按照我们上面这样的写法在编写程序
那么后面的两条输出语句都是有问题的，因为变量 a 仅会在随机数小于
0.5 的时候被定义 否则压根就没有定义变量 a 所以直接使用它 应该是要报错的
*/