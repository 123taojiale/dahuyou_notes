/*
作用于对象
*/
const arr = [3];
const obj = {
  0: 'dahuyou0', // 根据索引来确定这一项是第几项
  1: 'dahuyou1',
  length: 2 // 会根据 length 属性的属性值来确定拍扁多少项
};

// obj[Symbol.isConcatSpreadable] = false; // 对于对象而言 该知名符号所对应的成员属性的默认值是 false 表示不会拍扁
obj[Symbol.isConcatSpreadable] = true; // 我们可以将其重写为 true 让它可以被拍扁

const newArr = arr.concat(4, obj);

console.log(newArr);