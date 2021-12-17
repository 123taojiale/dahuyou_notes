/* 深度克隆
在不清楚对象结构的情况下，可以使用 clone 函数来实现深度克隆。
*/
/**
 * 克隆
 * @param {any} target 被克隆的目标
 * @param {Boolean}} isDeep 是否深度克隆
 */
function clone(target, isDeep) {
  // 1. 克隆数组
  if (Array.isArray(target)) {
    if (isDeep) {
      let newArr = [];
      target.forEach(item => {
        newArr.push(clone(item, isDeep));
      });
      return newArr;
    } else { // 浅拷贝一个数组
      return [...target];
      /* 或者
      return target.slice();
      target.slice() 等价于 target.slice(0, target.length); 等价于 [ ...target ] */
    }
  }
  // 2. 克隆对象
  if (typeof target === 'object') {
    let newObj = {};
    if (isDeep) {
      for (const prop in target) {
        newObj[prop] = clone(target[prop], isDeep);
      }
    } else {
      for (const prop in target) {
        newObj[prop] = target[prop];
      }
      /* 或者
      newObj = {
        ...target
      }
      */
    }
    return newObj;
  }
  // 3. 克隆基本数据类型
  return target;
}