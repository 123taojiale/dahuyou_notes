// 非捕获组模式 ==> ?: ==> 表示这个加小括号的，不是一个捕获组，而仅仅把其看做是一个整体。
var s = "2015-5-1, 2019-6-19, 2000-04-28";
var reg = /(?:\d{4})-(?:\d{1,2})-(\d{1,2})/g;
while (result = reg.exec(s)) {
  console.log(result[0], result[1], result[2], result[3]);
}
/* output
2015-5-1 1 undefined undefined
2019-6-19 19 undefined undefined
2000-04-28 28 undefined undefined
*/