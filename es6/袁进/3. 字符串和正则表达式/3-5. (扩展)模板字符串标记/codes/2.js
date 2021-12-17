/* [需求] 模拟模板字符串的效果
前置知识
[问题] 获取所有插值，将结果保存到一个数组中。
[分析] 这个需求实际上就是获取模板字符串标记（函数）的第一个参数的后续所有参数。
[解决方式]
  一、 通过 伪数组arguments 结合 slice 来获取
    1. Array.prototype.slice.apply(arguments).slice(1)
    2. [].slice.apply(arguments).slice(1)
    3. Array.from(arguments).slice(1)
    因为伪数组身上没有 slice 方法，所以只能借用 Array.prototype 身上的 slice 方法来获取，或者先将伪数组 arguments 转化为真数组之后，再直接调用 slice 方法来获取。
  二、 通过展开运算符来实现 【这是 “4. 函数” 的知识点】
    function myTag(parts, ...args) {
      args; // => 所有插值组成的数组
    }
*/
/*

*/
const skill1 = 'html';
const skill2 = 'css';
const skill3 = 'js';
/**
 * 模拟模板字符串的效果
 * @param {Array} parts 被插值分割的数组
 * @returns 经过模板字符串标记 处理后的返回值
 */
function myTag(parts) {
  const values = Array.from(arguments).slice(1);
  let str = '';
  for (let i = 0; i < values.length; i++) {
    str += parts[i] + values[i];
    if (i === values.length - 1) {
      str += parts[i + 1];
    }
  }
  return str;
}
const str = myTag `first ${skill1}, second ${skill2}, third ${skill3}.`;

console.log(str); // first html, second css, third js.
