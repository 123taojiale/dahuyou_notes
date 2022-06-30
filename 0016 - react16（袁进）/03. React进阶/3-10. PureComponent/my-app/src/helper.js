/**
 * 浅比较，只比较对象的第一层属性
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns 布尔
 */
export function ObjectEqual(obj1, obj2) {
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
    // if (!Object.is(obj1[prop], obj2[prop])) return false;
  }
  return true;
}
