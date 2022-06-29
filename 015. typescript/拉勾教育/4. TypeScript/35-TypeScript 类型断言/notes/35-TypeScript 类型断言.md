## 35-TypeScript 类型断言

### 前言

- 时长：3min

### [Array.prototype.find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

```js
const array1 = [5, 12, 8, 130, 44];

array1.find(element => element > 10); // => 12

array1.find(element => element > 1000); // => undefined
```

先回顾一下这个数组的 api，后边会用到。

### 类型断言

```ts
export {};

const nums: number[] = [-1, -2, 3];

const res = nums.find(it => it > 0);
// const res: number | undefined

const square = res * res; // error
// Object is possibly 'undefined'.
```

由于 res 的类型，有可能是 number | undefined。所以我们上边这样直接将其默认为一个数字来使用，将它们相乘，是会抛出错误的。这种情况下，我们就可以使用类型断言来解决。

```ts
export {};

const nums: number[] = [-1, -2, 3];

const res = nums.find(it => it > 0);
// const res: number | undefined

const num1 = res as number; // 写法1
// const num1: number

const num2 = <number>res; // 写法2
// const num2: number
```

> 推荐采用写法 1，因为写法 2 在写 React 时，JSX 下不能使用。

### 类型转换

类型断言 ≠ 类型转换

- 类型断言，是编译中的概念；
- 类型转换，是运行中的概念；

类型断言最终的编译结果中是不存在的。