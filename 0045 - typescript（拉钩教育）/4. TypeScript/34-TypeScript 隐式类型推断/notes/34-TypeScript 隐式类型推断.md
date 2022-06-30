## 34-TypeScript 隐式类型推断

### 前言

- 时长：2min

### Type Inference

[Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)，类型推断，也叫隐式类型推断。很简单，看一下例子就明白了。

```ts
let age = 22;
// let age: number = 22;
age = '22'; // error => Type 'string' is not assignable to type 'number'.
// age 会自动被推断为 number 类型。
```

```ts
function sayHello (msg: string) {
  return "Hello, ${msg}."
}
/*
function sayHello (msg: string): string {
  return "Hello, ${msg}."
}
ts 能够推断出我们的返回值是一个 string 类型
*/
```

```ts
let foo;
// let foo: any;
```

虽然 ts 能够很智能的推断出一些场景下，某些值的类型。但是，我们应该在定义这些值的时候，同时将这些值的类型也给定义好，这样对于代码的可读性，可维护性都有帮助。