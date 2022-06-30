## 31-TypeScript 枚举类型

### 前言

- 时长：7min

### enum

枚举类型，就是用来限定可选值的类型。分为**字符串枚举**、**数字枚举**、**常量枚举**，字符串枚举用的比较少。

> 下面的 codes 案例中，会介绍数字枚举和常量枚举，对于字符串枚举，就不做过多介绍了。字符串枚举就是枚举的值为字符串，它的特点和 js 中的对象差不多。

### codes

#### 1.ts

```js
export {};

// 文章的发布状态
const PostStatus = {
  Draft: 0, // 草稿
  Unpublished: 1, // 未发布
  Published: 2, // 已发布
};

// 文章对象
const post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
```

不使用枚举的话，在之前，对于文章状态对象 PostStatus，我们通常会定义一个对象来表示文章有可能的几种状态。

**编译结果**

```js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
// 文章的发布状态
var PostStatus = {
  Draft: 0,
  Unpublished: 1,
  Published: 2, // 已发布
};
// 文章对象
var post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
//# sourceMappingURL=1.js.map
```

#### 2.ts

```ts
export {};

enum PostStatus {
  Draft = 0,
  Unpublished = 1,
  Published = 2,
}

const post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
```

在 ts 中，我们也可以使用枚举的方式来写。注意语法。

**编译结果**

```js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var PostStatus;
(function (PostStatus) {
  PostStatus[PostStatus["Draft"] = 0] = "Draft";
  PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
  PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {}));
var post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
//# sourceMappingURL=2.js.map
```

**分析编译结果**

枚举类型，默认会“入侵”到编译结果中，表现为一个双向的键值对对象。

```js
// 通过键访问值
PostStatus.Draft // => 0

// 通过值访问键
PostStatus[0] // => Draft
```

**数字枚举的特征**

自增

```ts
enum PostStatus {
  Draft = 0,
  Unpublished, // Unpublished = 1,
  Published, // Published = 2,
}
```

默认从 0 开始自增。

```ts
enum PostStatus {
  Draft, // Draft = 0,
  Unpublished, // Unpublished = 1,
  Published, // Published = 2,
}
```

```ts
enum PostStatus {
  Draft = 5,
  Unpublished, // Unpublished = 6,
  Published, // Published = 7,
}
```

#### 3.ts

```ts
export {};

const enum PostStatus { // 加上 const => 常量枚举
  Draft = 0,
  Unpublished = 1,
  Published = 2,
}

const post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
```

**编译结果**

```js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
var post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: 0 /* Draft */ , // 0 // 1 // 2
};
//# sourceMappingURL=3.js.map
```

**编译结果分析**

对于常量枚举而言，它并不会生成到编译结果中。“值”所对应的“键”，会以注释的形式呈现 `status: 0 /* Draft */`。

如果我们确保在编译结果中，不会再去读取枚举中的成员，那么使用常量枚举更加合适。