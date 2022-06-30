var s = "2015-5-1, 2019-6-19, 2000-04-28";
// 需求：得到每一个日期，并得到每个日期的年月日。
var reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g;
while (result = reg.exec(s)) {
  console.log(result[0], result[1], result[2], result[3]);
}
/* output
2015-5-1 2015 5 1
2019-6-19 2019 6 19
2000-04-28 2000 04 28
*/

// 自己试着不用捕获组实现
var newArr = s.split(",");
let arr = [];
newArr.forEach(item => {
  console.log(item.trimStart()); // => 2015-5-1 2019-6-19 2000-04-28
  arr.push(item.split("-"));
});
console.log(arr[0][0], arr[0][1], arr[0][2],
  arr[1][0], arr[1][1], arr[1][2],
  arr[2][0], arr[2][1], arr[2][2]); // => 2015 5 1  2019 6 19  2000 04 28