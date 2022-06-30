var s = "hello world";
s = s.replace(/\b[a-z]/g, function (match) {
  return match.toUpperCase();
});
console.log(s); // Hello World

/*
将单词的首字符，变成大写。
*/