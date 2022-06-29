// 方式2
var s = "hello      woRld        js";

// 目前只要求考虑空格
function bigCamel(s) {
  return s.split(" ").filter(function (item) {
    return item.length > 0;
  }).map(function (item) {
    return item[0].toUpperCase() + item.substring(1);
  }).join("");
}

console.log(bigCamel(s)); // => HelloWoRldJs