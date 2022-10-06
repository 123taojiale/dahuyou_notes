/**
 * 判断一个数是否是素数
 * @param {Number} num 数字
 * @returns true 是素数 | false 不是素数
 */
const isPrime = num => {
  if (num < 2) return false // 2 是最小的素数

  // 查找除了 1 和自身之外，是否还有其它余数，如果有，则非素数
  for (let i = 2; i < num - 1; i++) if (num % i === 0) return false

  return true
}

export default isPrime
