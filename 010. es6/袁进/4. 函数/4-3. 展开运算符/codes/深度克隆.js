/*
需求：未知数组求和
 */
/**
 * 根据指定的长度来创建一个随机数组
 * @param {Number} len 随机数组的长度
 */
function createRandomArr(len) {
  const resultArr = [];
  for (let i = 0; i < len; i++) {
    const item = getRandom(1, 10);
    resultArr.push(item);
  }
  return resultArr;
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function sum(...args) {
  let result = 0;
  args.forEach(arg => {
    result += arg;
  });
  return result;
}

const arr = createRandomArr(3);
console.log(arr);
// 错误调用方式：
sum(arr); // 相当于仅传入了一个参数
// 正确调用方式：
sum.apply(null, arr); // 将参数合并到一个数组中传入
sum(...arr); // 将数组展开后传入