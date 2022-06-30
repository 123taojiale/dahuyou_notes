// 得到一个字符串中中文字符的数量
var reg = /[\u4e00-\u9fa5]/g;
var s = "fgdgg啊手动sdf阀梵蒂冈sd234";
var n = 0;
while (reg.test(s)) {
  n++;
}
console.log(n); // 7