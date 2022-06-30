/*
静态属性 RegExp.lastIndex 该索引表示从哪里开始下一个匹配
*/
var s = "1234abc123ABC";
var reg = /\d+/gmi; // 贪婪模式 没有加量词 ?
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 0 true 4
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 4 true 10
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 10 false 0
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 0 true 4

/*
第三次匹配：是从 A 匹配到结尾 C 发现没有匹配项，所以 reg.test(s) 返回 false。
说明:
1. 一开始从下标为0的位置开始匹配 也就是 1
2. 第一次test结束之后 此时索引为与第一次匹配结束的位置 4 也就是 a
3. 当匹配到结尾之后 在重头开始匹配
小结:
1. 开始索引是0;
2. 下一次索引是上一次的结束位置;
3. 匹配到结尾后 会重头开始继续匹配  */