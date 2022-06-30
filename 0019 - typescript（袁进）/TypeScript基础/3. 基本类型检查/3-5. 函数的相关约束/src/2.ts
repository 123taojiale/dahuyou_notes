function sum(a: number, b: number, c?: number) {
  if (c) return a + b + c;
  return a + b;
}

sum(1, 2); // => 3
sum(1, 2, 3); // => 6
/*
可选参数，表示该参数可以不传递。
在冒号前面加上一个问号，表示该参数是可选的 ?:
c 就是可选参数，它可能是 undefined 或 number。
*/