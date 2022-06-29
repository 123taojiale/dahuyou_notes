/*
重复声明，导致数据被覆盖。
*/
var a = 1;
function print() {
  console.log(a);
}
print(); // => 1
var a = 2;
print(); // => 2