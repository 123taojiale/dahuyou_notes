// 约束一个 User 对象

// 使用接口来写：
// interface User {
//   name: string;
//   age: number;
//   sayHello: () => void; // 方式1
// }

// interface User {
//   name: string;
//   age: number;
//   sayHello(): void; // 方式2
// }

// 使用类型别名来写：
// type User = {
//   name: string;
//   age: number;
//   sayHello: () => void;
// }

// type Uesr = {
//   name: string;
//   age: number;
//   sayHello(): void;
// }


// 单独约束一个函数

// 使用接口来写：
// interface test {
//   (n: number): void;
// }

// 使用类型别名来写

// 写法1
// type test = {
//   (n: number): void;
// }

// 写法2
// type test = (n: number) => void;


// 接口的继承

// interface IA {
//   T1: string;
// }

// interface IB extends IA {
//   T2: number;
// }

// const b: IB = {
//   T1: "123",
//   T2: 123,
// }

// 类型别名 - 交叉类型 &

// type TA = {
//   T1: string;
// }

// type TB = {
//   T2: number;
// } & TA;

// const b: TB = {
//   T1: "123",
//   T2: 123,
// }

// 接口在继承时出现冲突

// interface IA {
//   T1: string;
// }

// interface IB extends IA {
//   T1: number;
//   T2: number;
// }
/*
在定义接口时，即可报错：
Interface 'IB' incorrectly extends interface 'IA'.
Types of property 'T1' are incompatible.
Type 'number' is not assignable to type 'string'.
*/

// 交叉类型发生冲突

// type A = {
//   T1: string;
// };

// type B = {
//   T1: number;
//   T2: number;
// } & A;

// const b: B = {
//   T1: "123", // 123
//   T2: 123,
// }

// 暂时不知道该如何给 b.T1 进行赋值
/*
在使用类型 B 时，才发现 T1 是 never 类型
*/