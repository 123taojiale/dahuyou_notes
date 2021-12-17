var s = "1234abc567ABC";
var result = s.match(/\d+/g); // 将所有匹配结果以字符串数组的形式返回
console.log(result); // (2) ["1234", "567"]