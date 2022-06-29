function sum_3(a: number, b: number, c: number = 3) {
  if (c) return a + b + c;
  return a + b;
}

sum_3(1, 2); // => 6
/*
默认参数，写法上和 es6 的默认参数写法相同。
默认参数表示当我们没有传递这个参数时，该参数的值是什么。由此可知，默认参数必然是可选的。
类型推断的结果：function sum_3(a: number, b: number, c?: number): number
从类型推断的结果中我们发现，c 被识别为一个可选参数。
*/