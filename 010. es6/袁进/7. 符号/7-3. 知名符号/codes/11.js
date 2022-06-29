const obj = {
  a: 1,
  b: 2
};

obj + 3; // => [object Object]3
obj * 3; // => NaN

/* obj + 3 和 obj * 3 都会发生下面两个步骤
1. 先调用 obj 身上的 valueOf 方法 obj.valueOf()
2. 再调用 obj 身上的 toString 方法 obj.valueOf().toString() */