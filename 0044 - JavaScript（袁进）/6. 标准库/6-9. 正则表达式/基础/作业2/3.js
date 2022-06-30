/*
过滤敏感词，有一个敏感词数组，需要将字符串中出现的敏感词替换为四个星号
敏感词数组：["共产党", "too young too simple", "营销"]
*/
var senWords = ["色情", "暴力", "卢本伟", "贸易战"];
function removeSensitiveWords(s, rep) {
  var reg = new RegExp(`(${senWords.join("|")})+`, "g"); // + 连续的敏感词汇，只替换一次
  return s.replace(reg, rep);
}
var testStr = "sdffs色情暴力sfsfs卢本伟牛逼dsdf贸易战sf";
var replaceStr = "****";
const result = removeSensitiveWords(testStr, replaceStr);
console.log(result); // => sdffs****sfsfs****牛逼dsdf****sf

/*
注意: 正则表达式的创建方式 此时如果还是使用字面量的形式来创建 就不合适了
var reg = new RegExp(`(${色情|暴力|卢本伟|贸易战})+`, "g");
在实际开发中，这个敏感词数组很可能是来自数据库的。
所以，我们不能像上面这样将其写死，因为敏感词数组是不固定的，随时都可能会变。
*/