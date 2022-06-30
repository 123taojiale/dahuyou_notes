var s = "hello world\tjavascript\nyes";
s = s.replace(/\s*\b[a-z]\s*/g, function (match) {
  console.log(match); // h w j y
  return match.toUpperCase().trim();
});
console.log(s); // HelloWorldJavascriptYes

/*
需求：将字符串中的空白字符去掉，并转换为大驼峰的形式。
*/