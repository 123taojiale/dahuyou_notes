// 1.ts
export {};

function stringify (value: any) {
  return JSON.stringify(value);
}

stringify('123');

stringify(123);

stringify(true);

stringify({});

stringify([]);

stringify(() => {});

// ...

/*
上面这些写法都不会出现错误提示。
ts 对 any 类型，不会有约束，可以是任何类型。
*/
