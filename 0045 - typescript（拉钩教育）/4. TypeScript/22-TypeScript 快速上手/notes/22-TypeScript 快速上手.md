## 22-TypeScript 快速上手

### 前言

- 时长：6min

### install

**global**

```shell
npm install -g typescript
```

**local**

```shell
npm install typescript --save-dev
```

### tsc

安装完 typescript 之后，我们就可以在终端中使用 tsc 命令，使用该命令，可以将我们编写的 ts 文件给编译为等效的 js 文件。tsc 不仅可用于编译单个 ts 文件，还可以用于编译整个项目（工程）。

**编译工程中的所有 ts 文件**

```shell
tsc
```

**编译指定的 ts 文件**

```shell
tsc ./xxx/xxx.ts
```

### 编译结果

生成的编译结果，默认是有 es3 标准。

编译结果的版本标准，我们其实是可以配置的，在 **23-配置文件** 中，就会介绍到 ts 配置文件的相关内容。

**target**

```json
{
  "compilerOptions": {
    "target": "es3",
  },
}
```

[target](https://www.typescriptlang.org/tsconfig/#target) 字段，是用来配置编译结果的。来看看官方对于该配置项给的注解：Set the JavaScript language version for emitted JavaScript and include compatible library declarations.

![20211116185756](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211116185756.png)

### codes

#### 1.ts

**ts 文件**

```ts
const hello = (name) => {
  console.log(`Hello, ${name}`);
};

hello("TypeScript");
```

**编译**

```shell
tsc .\1.ts
```

**编译结果**

```js
var hello = function (name) {
  console.log("Hello, " + name);
};
hello("TypeScript");
```

**补充**

执行 tsc 编译命令，生成编译结果 1.js 之后，会发现 1.ts 文件报错了，这一点在 **27-作用域问题** 中会介绍。在学习过程中，我们可以在每个 ts 文件中，加上 `export {};` 语句，来解决该问题。

![20211116184140](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211116184140.png)

![20211116184533](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211116184533.png)

> 这个问题是因为默认情况下，我们定义的东西都会被丢到全局中执行，发生了命名冲突，所以才导致的错误。

#### 2.ts

**ts 文件**

```ts
const hello = (name: string) => {
  console.log(`Hello, ${name}`);
};

// hello(123); // => Argument of type 'number' is not assignable to parameter of type 'string'.
hello('TypeScript');
export {};
```

**编译**

```shell
tsc ./2.ts
```

**编译结果**

```js
"use strict";
exports.__esModule = true;
var hello = function (name) {
    console.log("Hello, " + name);
};
// hello(123); // => Argument of type 'number' is not assignable to parameter of type 'string'.
hello('TypeScript');
```

类型注解并不会生成到编译结果中。