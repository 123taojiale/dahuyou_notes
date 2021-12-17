/*
String.fromCharCode() 将字符编码转换成字符
*/
var str = "";
for (var i = 65; i < 65 + 26; i++) {
  str += String.fromCharCode(i);
}
console.log(str); // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"