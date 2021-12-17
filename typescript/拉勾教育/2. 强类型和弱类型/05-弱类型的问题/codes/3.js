const obj = {};

obj[true] = 100;

console.log(obj['true']); // => 100
/*
在 es 中，对象的属性，只能是：
  - 字符串
  - symbol
我们在定义 obj 对象身上的 true 属性时，实际上是在定义 'true' 属性。
若我们不知道 es 的这个“特点”，那么很可能就会出现错误的对象索引器使用。
*/