/*
判断对象 obj 的原型链上是否含有构造函数 A 的原型 A.prototype。
*/
obj instanceof A;
A[Symbol.hasInstance](obj) // Function.prototype[Symbol.hasInstance]
/*
以上两种写法是等效的
*/