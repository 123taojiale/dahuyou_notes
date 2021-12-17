function alwaysDoSomething(): never {
  while (true) {
    // ...
  }
}
/*
若不进行约束，那么识别出函数的返回值为 void
  function alwaysDoSomething(): void
此时，也需要我们进行手动约束。
*/
