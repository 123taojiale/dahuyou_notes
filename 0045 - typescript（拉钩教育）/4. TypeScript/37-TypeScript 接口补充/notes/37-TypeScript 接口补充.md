## 37-TypeScript 接口补充

### 前言

- 时长：3min

### [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

使用接口，我们还可以约定对象身上的一些特殊成员（[可选成员](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties)、[只读成员](https://www.typescriptlang.org/docs/handbook/interfaces.html#readonly-properties)、[动态成员](https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks)）。

### codes

#### 1.ts

```js
export {};

interface Post {
  title: string;
  content: string;
  subtitle?: string;
  // (property) Post.subtitle?: string | undefined
  readonly summary: string;
}

const hello: Post = {
  title: "Hello TypeScript",
  content: "A javascript superset.",
  summary: 'A javascript', // 摘要取自内容
}

// hello.summary = 'xxx'; // error
// Cannot assign to 'summary' because it is a read-only property.

/*
subtitle 是一个可选的成员。
相当于我们使用 string | undefined 对其进行类型约束。
*/
```

#### 2.ts

```ts
interface MyObject {
  [prop: string]: string;
}

const obj: MyObject = {};

obj.foo = "123";
obj.bar = "456";
```

`[prop: string]: string;` 我们可以在接口中动态的添加键值对，想要多少加多少，不过需要注意键、值的类型需要为 string 类型。

> prop 只是一个名儿，用来占位的，叫 key、propName 啥的，都 OK。