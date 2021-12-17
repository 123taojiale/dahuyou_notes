## 32-TypeScript 函数类型

### 前言

- 时长：4min

在 js 中，定义一个函数，有两种方式。

```js
// 通过 函数声明 定义一个函数
function func() {}
// 通过 函数表达式 定义一个函数
const func = function() {}
```

下边要介绍的就是通过这两种方式来定义函数时，对函数类型约束的写法都应该如何书写。

### codes

#### 1.ts

```ts
function func(a: number, b: number): string {
  return 'func1';
}

func(123, 456);

/*
func(123)
// Expected 2 arguments, but got
// 1.ts(1, 26): An argument for 'b' was not provided. 译：1.ts 文件的第一行的第 26 个字符。

func(123, 456, 789)
// Expected 2 arguments, but got 3.

这两种写法在 ts 中都会报错，这一点类似于强类型语言。
当我们调用函数时，参数个数，参数数据类型，都必须与形参相同。
*/
```

#### 2.ts

```ts
export {};
function func(a: number, b?: number): string {
  return 'func1';
}

func(123, 456);
func(123);
/*
?: 表示可选参数
*/
```

**Attention**

可选参数必须要位于参数列表的末尾。

#### 3.ts

```ts
export {};
function func(a: number, b: number = 456): string {
  return 'func1';
}

func(123, 456);
func(123);
/*
b: number = 456
表示参数 b 的默认值是 456
*/
```

默认参数，必然是可选的。当我们没有传递实参时，该形参就会使用默认值。

#### 4.ts

```ts
export {};
function func(a: number, b: number = 456, ...rest: number[]): string {
  return "func";
}

func(123, 456);
func(123);
func(123, 456, 789);
func(123, 456, 789, 999);

/*
...rest: number[]
表示剩余参数
*/
```

#### 5.ts

前面介绍的都是函数声明的形式定义函数时，类型约束该如何书写。但是，我们还需要知道使用函数表达式的形式来定义函数时，应该如何对函数类型进行类型约束。

其实，在掌握了函数声明式如何书写后，再写函数表达式的类型约束时，就很简单了，不过还是存在一定细微的差别。

```ts
export {};

const func1 = function (a: number, b: number = 456, ...rest: number[]): string {
  return "func1";
};

const func2: (a: number, b: number, ...rest: number[]) => string
= function (a: number, b: number = 456, ...rest: number[]): string {
  return "func2";
};
/*
- 参数默认值
- 函数返回值

- 参数默认值
  下面这种写法，b: number = 456 不能写在前边，得写在后边，下面是错误提示：
  A parameter initializer is only allowed in a function or constructor implementation.

- 函数返回值
  : 变为 =>
*/
```

