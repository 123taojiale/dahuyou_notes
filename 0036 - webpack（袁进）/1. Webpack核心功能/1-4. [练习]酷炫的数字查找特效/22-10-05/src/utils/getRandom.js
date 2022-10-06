/**
 * 获取一个介于 [min, max] 区间内的随机整数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns [min, max] 随机整数
 */
const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min)

export default getRandom
