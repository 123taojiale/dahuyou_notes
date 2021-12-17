/**
 * 找到某个字符串中出现最多的字符，打印字符和它出现的次数。
 * 若有多个满足条件的成员，则找到第一个即可。
 * 测试字符串：absadfgsDfafgsdfgsdfgsadfasdasvasdfsadfasdfa
 */
/**
 * 得到数组中出现频率最高的数字或字符和频率
 * 返回一个对象
 * @param {*} arr
 */
function getTopFreqInArray(str) {
  var arr = Array.from(str), // Array.from() ==> 伪数组 转 真正数组
    records = {}; // 记录出现频率
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i];
    if (records[n]) {
      records[n]++;
    } else {
      records[n] = 1;
    }
  }
  // console.log(records); // => { a: 10, b: 1, s: 10, d: 8, f: 9, g: 4, D: 1, v: 1 }
  var result; // 记录最终结果的对象
  for (var prop in records) {
    if (!result || records[prop] > result.frequency) {
      result = {
        char: prop,
        frequency: records[prop]
      };
    }
  }
  return result;
}

var s = "absadfgsDfafgsdfgsdfgsadfasdasvasdfsadfasdfa"; // 字符串本质上是一个数组
// 将 s 变成数组
console.log(getTopFreqInArray(s));