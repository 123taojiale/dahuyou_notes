/*
模拟共享符号的实现原理
*/
const SymbolFor = (() => {
  const global = {}; // 用于记录 共享符号
  return (des) => { // des 为符号描述
    if (global[des]) { // 若 该符号描述已经被记录到 global 中 那么直接返回它的值
      return global[des];
    } else { // 若 该符号是新的符号 那么将它保存到 global 中 再返回
      global[des] = Symbol(des);
      return global[des];
    }
  }
})();

const syb1 = SymbolFor('dahuyou');
const syb2 = SymbolFor('dahuyou');
syb1 === syb2; // true
SymbolFor() === SymbolFor(); // true