## 30-TypeScript 元组类型

### 前言

- 时长：2min

### Tuple Types

Tuple Types，表示元组类型。是一个明确成员数量和成员类型的数组。

可以使用类似于数组字面量的语法来定义一个元组类型。

```ts
const tuple: [number, string] = [123, 'abc'];
// 赋的值，必须是一个数组类型；
// 数组的长度必须是 2
// 数组的第一个成员必须是 number 类型，第二个成员必须是 string 类型。
```

获取元组内容的语法，和数组一致。

```ts
tuple[0]; // => 123
tuple[1]; // => 'abc'

// 也可以通过数组解构的方式，来获取元组的类型。
const [age, name] = tuple;
age; // => 123
name; // => 'abc'
```

通常会在函数的多个返回值中，用到元组。

### codes

- [ ] 1.ts

```js
Object.entries({
  foo: 123,
  bar: 'abc'
})
```

![20211117144643](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211117144643.png)

Object.entries 获取到的也是一个元组类型。