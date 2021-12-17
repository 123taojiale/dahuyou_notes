## 36-TypeScript 接口

### 前言

- 时长：4min

### [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

interface，又名接口，它也是 ts 中的一种类型。

接口可以理解为一种规范，一种契约。在 ts 中，它是用来约定对象结构的一种约定。

### codes

- [ ] 1.ts

```ts
export {};

interface Post {
  title: string; // , // ;
  content: string;
}

function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

printPost({
  title: "Hello TypeScript",
  content: "A javascript superset.",
});

/*
接口字段之间的分隔符支持 3 种写法
  ,
  ;
  空
*/
```

**编译结果**

```js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

function printPost(post) {
  console.log(post.title);
  console.log(post.content);
}
printPost({
  title: "Hello TypeScript",
  content: "A javascript superset.",
});
/*
接口字段之间的分隔符支持 3 种写法
  ,
  ;
  空
*/
//# sourceMappingURL=1.js.map
```

接口并不会生成到编译结果中。