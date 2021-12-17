function throwError(msg: string): never {
  throw new Error(msg);
  console.log("123"); // 永远不会执行
}
/*
若我们不指定 throwError 函数的返回值，那么它推断出来的结果是：
  function throwError(msg: string): void
在这种情况下，我们就需要手动约束，指定其返回值为 never，表示该函数永远不可能结束。
*/
