const arr = [3];
const arr2 = [5, 6, 7, 8];

// arr2[Symbol.isConcatSpreadable] = true; // true 是默认值 表示会拍扁
arr2[Symbol.isConcatSpreadable] = false; // false 不会拍扁

const newArr = arr.concat(56, arr2);

arr; // => [3]
newArr; // => [3, 56, [5, 6, 7, 8]]