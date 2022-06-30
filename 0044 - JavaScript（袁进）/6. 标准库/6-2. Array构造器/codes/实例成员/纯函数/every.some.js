/*
every：是否所有元素都满足条件
*/
var arr = [77, 65, 68, 55, 80];
// 判断是否所有同学都及格
var result = arr.every(function (item) {
  return item >= 60;
});
console.log(result); // false



/*
some：是否至少有一个元素满足条件
*/
var arr1 = [37, 25, 48, 55, 30];
//判断是否至少有一个同学及格
console.log(arr1.some(function (item) {
  return item >= 60;
})); // false


/*
小结
every => 判 所有
some => 判 存在
*/