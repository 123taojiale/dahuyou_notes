/*
链式编程：每一个函数调用返回的类型一致
*/
var arr = [22, 33, 44, 55, 66, 77, 88];

/*
需求：
先对数组进行随机排序
只取及格的分数
得到学生对象的数组（每个学生对象包含姓名和分数）
*/

var result = arr.sort(function () {
  return Math.random() - 0.5;
}).filter(function (item) {
  return item >= 60;
}).map(function (item, i) {
  return {
    name: `学生${i+1}`,
    score: item
  }
});
console.log(result);
/*
[
  { name: '学生1', score: 88 },
  { name: '学生2', score: 77 },
  { name: '学生3', score: 66 }
]
*/