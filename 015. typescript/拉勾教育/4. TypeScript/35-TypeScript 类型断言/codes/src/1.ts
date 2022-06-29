export {};

const nums: number[] = [-1, -2, 3];

const res = nums.find(it => it > 0);
// const res: number | undefined

const num1 = res as number; // 写法1
// const num1: number

const num2 = <number>res; // 写法2
// const num2: number