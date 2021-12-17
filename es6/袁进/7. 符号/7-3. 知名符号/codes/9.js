const arr = [3];
const obj = {
  0: 'dahuyou0',
  1: 'dahuyou1',
  3: 'dahuyou3',
  length: 4 // 共分割为 4 份 其中第三份 也就是索引为 2 的那份 是 empty
};

obj[Symbol.isConcatSpreadable] = true;

const newArr = arr.concat(4, obj);

console.log(newArr);