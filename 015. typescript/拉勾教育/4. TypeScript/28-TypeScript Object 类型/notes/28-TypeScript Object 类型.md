## 28-TypeScript Object 类型

### 前言

- 时长：2min

### object

object 类型，并不单指对象，它表示非原始数据类型之外的所有值。function、array、object 都是 object 类型。

```ts
const foo: object = function () {} // {} // []
```

若要约束一个对象类型，我们可以采用类似于对象字面量的写法来约束。

```ts
const obj: { foo: number, bar: string } = { foo: 123, bar: "abc" }
// 成员不能多，也不能少，必须是 2 个；
// 成员的数据类型必须是指定的类型；
```

实际开发中，很少会使用上面这种方式来约束对象类型。而是使用接口（36 + 37 中会介绍）。

