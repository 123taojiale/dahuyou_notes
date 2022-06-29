// RegExp.lastIndex 是可写的
var s = "1234abc123ABC";
var reg = /\d+/gmi;
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 0 true 4
reg.lastIndex = 0;
console.log(reg.lastIndex, reg.test(s), reg.lastIndex); // 0 true 4