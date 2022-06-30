/*
map：映射，将数组的每一项映射称为另外一项
*/

var arr = [55, 66, 22, 33, 44, 88];

//得到一个新数组，新数组的每一项是一个对象
//对象中包含两个属性：name、score

var newArr = arr.map(function (item, i) {
  return {
    name: "学生" + (i + 1),
    score: item
  }
});
console.log(newArr);
/*
[
  { name: '学生1', score: 55 },
  { name: '学生2', score: 66 },
  { name: '学生3', score: 22 },
  { name: '学生4', score: 33 },
  { name: '学生5', score: 44 },
  { name: '学生6', score: 88 }
]
*/

// 得到一个学生的姓名数组
var newArr2 = newArr.map(function (item) {
  return item.name;
});

console.log(newArr2); // (6) ["学生1", "学生2", "学生3", "学生4", "学生5", "学生6"]