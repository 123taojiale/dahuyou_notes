/**
 * 获取随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns 位于区间 [min, max] 内的随机整数
 */
const getRandom = (min, max) => {
  return Math.round((max - min) * Math.random() + min)
}

export default getRandom;