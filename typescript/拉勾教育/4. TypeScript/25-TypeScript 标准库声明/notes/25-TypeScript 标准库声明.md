## 25-TypeScript 标准库声明

### 前言

- 时长：5min

标准库，就是内置对象对应的类型声明文件。

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "sourceMap": true,
    "outDir": "./dist",
    "strict": true,
  }
}
```

继续使用上一节课的配置。

### [target](https://www.typescriptlang.org/tsconfig#target) | [lib](https://www.typescriptlang.org/tsconfig#lib)

#### target

target 配置的是编译目标的 es 版本标准，由于 target 配置的是 es5，表示我们编写的 ts 代码，最高只能使用 es5 提供的一些新特性，当我们想要去使用 es6 中的新增内容时，就会抛出错误。

```ts
Promise();
// 'Promise' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later.
```

对于该错误，提示信息告诉我们，`change your target library` 改变我们的标准库，`Try changing the 'lib' compiler option to es2015 or later` 尝试将 lib 配置为 es2015（es6）或更新的版本。

配置 lib 是一种解决方式，当然，我们也可以仅配置 target。当我们将 target 配置为 es2015 时，就不会再报错了。

```ts
const a: symbol = Symbol();
const b: object = new Promise((resolve, rejct) => {});
```

**查看标准库声明文件**

将鼠标悬停在 Symbol 上，然后 Ctrl + click，即可跳转到 Symbol 的标准库声明文件。

![20211117115710](https://cdn.jsdelivr.net/gh/123taojiale/dahuyou_picture@main/blogs/20211117115710.png)

仔细看文件名，会发现是 es2015，采用同样的方式进入配置改变之前的标准库声明文件，会发现标题是 es5。由于在 es5 这个标准库声明文件中，压根就没有 Symbol、Promise，所以才会报错，找不到该类型。

#### lib

当然，我们配置 lib 也可以实现同样的效果。

```json
{
  "compilerOptions": {
    // ...
    "lib": ["es2015"],
  }
}
```

`"lib": ["es2015"]` 表示的含义是添加标准库 es2015。

仔细观察，会发现它是一个数组，表示它可以添加多个标准库。若我们想要使用 jQuery、node 的标准库，我们只要添加上去即可。但是不幸的是，jquery、node 并非 lib 的可选值，它没有给我们提供这些选项，所以，它们的声明文件，我们得到 **@types** 中下载（后边介绍）。

> 顺带提一嘴，它的默认值为 `["dom"]`，标准库 dom 包含了 window, document, etc. 的相关声明，也就是浏览器的相关的所有 api，我们在 ts 中书写时，都不会报错。若我们重新配置它的值，那么默认值将被覆盖，console 可能就没法用了，因为它是浏览器环境提供的（node 环境也提供），而非 es 标准提供的。es 标准不提供任何的输入输出语句。

