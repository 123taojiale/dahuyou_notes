var reg = /\d+/g;
var s = "1234abc567ABC";

// 得到所有的匹配结果和位置
while (result = reg.exec(s)) { // result = reg.exec(s) 这整个表达式的返回值是 result 的值
  console.log(`匹配结果：${result[0]}，出现位置：${result.index}`);
}

/* output
匹配结果：1234，出现位置：0
匹配结果：456，出现位置：7
*/