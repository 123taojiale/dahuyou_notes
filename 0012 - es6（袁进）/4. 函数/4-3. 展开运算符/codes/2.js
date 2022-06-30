/*
需求：数组浅度克隆
*/
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr1 === arr2; // => false
arr1; // => [1, 2, 3]
arr2; // => [1, 2, 3]