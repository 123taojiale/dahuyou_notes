/*
依据码点来获取字符串的长度（即：实际的符号的个数）
解决的问题:
  防止有的特殊字符，默认占两个码元，若使用字符串的 length 属性来获取，会导致获取到的值比实际值偏大的问题。
比如：('123' + '𠮷' + '456').length; // 8
*/
/**
 * 判断字符是是32位的还是16位的
 * 32位 返回 true
 * 16位 返回 false
 * @param {String} cahr 字符
 * @param {Number} i 第 i 的码元
 */
function is32bit(char, i) {
  // 若码点大于 16 位二进制的最大值 那么它就是 32 位的
  return char.codePointAt(i) > 0xffff;
}

/**
 * 获取一个字符串的码点的真实长度
 * @param {String} str 字符串
 */
function getLengthOfCodePoint(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    // i 在索引码元
    if (is32bit(str, i)) {
      // 当前字符在 i 这个位置 占了两个 码元
      i++;
    }
    len++;
  }
  return len;
}

console.log(getLengthOfCodePoint('123' + '𠮷' + '456')); // 7