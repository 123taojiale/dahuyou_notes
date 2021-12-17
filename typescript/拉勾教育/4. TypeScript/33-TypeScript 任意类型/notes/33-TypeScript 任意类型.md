## 33-TypeScript 任意类型

### 前言

- 时长：2min

### any

ts 对 any 类型，不会有约束，可以是任何类型。any 类型不安全，一般不会使用 any 类型。通常在为了兼容老版本的系统时，会用到 any 类型。

### codes

**JSON.stringify**

该函数的第一个参数，就是一个 any 类型。

![20211117153920](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211117153920.png)

#### 1.ts

```ts
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
```

any 类型，不安全，应该尽可能少使用 any 类型。

#### 2.ts

```ts
export {};

let foo: any = '123';

foo = 100;

foo.bar();
/*
语法上都不会报错
*/
```

