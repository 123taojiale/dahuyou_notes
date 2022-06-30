/*
findIndex: 查找第一个满足条件的元素，返回元素的下标，若没找到，则返回 -1
*/
var arr = [{
  name: "a",
  age: 11,
  score: 55
}, {
  name: "b",
  age: 12,
  score: 65
}, {
  name: "c",
  age: 22,
  score: 85
}];
// 得到及格的学生（找第一个的下标）
var index = arr.findIndex(function (item) {
  return item.score >= 60
});
console.log(index); // 1