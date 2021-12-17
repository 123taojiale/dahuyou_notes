/* 需求：实现不定参求和
做法1：将参数打包成一个数组传递到函数中
*/
function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

sum([1]); // => 1
sum([1, 2]); // => 3
sum([1, 2, 3]); // => 6
sum([1, 2, 3, 4]); // => 10