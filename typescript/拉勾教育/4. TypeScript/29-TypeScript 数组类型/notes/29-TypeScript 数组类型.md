## 29-TypeScript 数组类型

### 前言

- 时长：2min

### 数组

若要约束一个数组，要求该数组的每一个成员都是数字，以下两种写法都是可行的。

```ts
const arr1: Array<number> = [1, 2, 3];

const arr2: number[] = [1, 2, 3]; // 更常见
```

第二种写法其实是第一种写法的语法糖，它们都是等效的。

### codes

- [ ] 1.ts

```ts
/**
 * 不定参求和
 * @param args
 * @returns
 */
function sum(...args: number[]) {
  return args.reduce((prev, cur) => prev + cur, 0);
}

sum(1, 2, 3); // => 6
```