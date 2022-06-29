export {};

const func1 = function (a: number, b: number = 456, ...rest: number[]): string {
  return "func1";
};

const func2: (a: number, b: number, ...rest: number[]) => string = function (a: number, b: number = 456, ...rest: number[]): string {
  return "func2";
};
/*
下面这种写法，b: number = 456 不能写在前边，得写在后边，下面是错误提示：
A parameter initializer is only allowed in a function or constructor implementation.
*/