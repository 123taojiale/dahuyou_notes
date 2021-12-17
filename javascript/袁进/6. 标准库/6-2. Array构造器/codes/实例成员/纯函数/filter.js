/*
filter：过滤，得到满足条件的元素组成的新数组
*/
var arr = [77, 25, 88, 55, 30];
//得到所有及格的分数
var newArr = arr.filter(function (item) {
  return item >= 60;
});

console.log(newArr); // (2) [77, 88]



var arr1 = [{
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

//得到及格的学生
var result = arr1.filter(function (item) {
  return item.score >= 60
});

console.log(result); // (2) [{0: {name: "b", age: 12, score: 65}}, {1: {name: "c", age: 22, score: 85}}]