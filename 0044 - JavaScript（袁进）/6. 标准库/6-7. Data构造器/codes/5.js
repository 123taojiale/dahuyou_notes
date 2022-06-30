/*
日期的运算
日期对象重写了 Object 中的 valueOf 方法，返回的是一个数字，表示时间戳。
因此，日期对象可以进行数学运算。
示例：加 1 天
*/
// 正确写法
var d = new Date();
d; // => Tue Sep 15 2020 20:11:38 GMT+0800 (中国标准时间)
d.setTime(d.valueOf() + 24 * 60 * 60 * 1000); //
d; // => Wed Sep 16 2020 20:11:38 GMT+0800 (中国标准时间)

// 错误写法
var d = new Date();
d; // => Tue Sep 15 2020 20:11:38 GMT+0800 (中国标准时间)
d.setTime(d.getDate() + 1); // d.getDate() + 1 ==> 16
d; // => Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)