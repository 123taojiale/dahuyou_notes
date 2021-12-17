// 捕获组如果有名字 那么也可以通过名字来引用
var s = "aaaaaaaabbbbbbbbbccccccdefgggggggg";
var reg = /(?<char>\w)\1+/g;
while (result = reg.exec(s)) {
  console.log(result[1]);
}