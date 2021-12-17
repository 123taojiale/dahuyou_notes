function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('arguments must be a number');
  }

  return a + b;
}
/*
if (typeof a !== 'number' || typeof b !== 'number') {
  throw new TypeError('arguments must be a number');
}
对于强类型的语言来说，这样的判断就是多余的。
因为，函数 sum 的形参的类型如果不对，压根就不会执行函数体。
*/