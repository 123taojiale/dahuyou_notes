/*
若我们在定义函数时，没有给对应的形参赋默认值，那么默认我们给它赋的值为 undefined。
*/
function sum(a, b, c) {
  return a + b + c;
}
/* 等效：
function sum(a = undefined, b = undefined, c = undefined) {
    return a + b + c;
}
*/
sum(10, 1, 2); // => 13
sum(11, 1, 2); // => 14
sum(12, 1, 2); // => 15