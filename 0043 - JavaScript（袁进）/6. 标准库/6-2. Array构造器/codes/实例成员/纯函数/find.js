/*
find: 查找第一个满足条件的元素，返回元素本身，如果没有找到，返回undefined
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

//得到及格的学生（找第一个）
var result = arr.find(function (item) {
  return item.score >= 60
});
console.log(result); // {name: "b", age: 12, score: 65}