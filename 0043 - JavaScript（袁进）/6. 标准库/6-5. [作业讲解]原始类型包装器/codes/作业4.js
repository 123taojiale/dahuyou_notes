/*
将字符串按照字符编码的顺序重新升序排序
测试字符串：bffdgwfafagfdgsfafa
*/
var s = "bffdgwfafagfdgsfafa";
function strSort(str){
  return Array.from(str).sort().join("");
}
console.log(strSort(s)); // => aaaabddfffffffgggsw

/*
降序只要加上一个 reverse 即可：
Array.from(s).sort().reverse().join("")
*/