掌握 readonly 修饰符的用法

**问：下边这两种写法有何区别？**

```ts
// 写法1
interface A {
  T1: readonly number[]
}

// 写法2
interface A {
  readonly T1: readonly number[]
}
```

**写法1：**
1. T1 数组内部成员无法变更
2. T1 自身可以被重新赋值

**写法2：**
1. T1 数组内部成员无法变更
2. T1 自身无法被重新赋值