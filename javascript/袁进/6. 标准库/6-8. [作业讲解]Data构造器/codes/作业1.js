/*
友好的日期字符串
将当前时间转换为下面这种格式来展示
  年-月-日 时:分:秒
*/
function getDateString(date) {
  var year = date.getFullYear().toString().padStart(4, "0");
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");
  var hour = date.getHours().toString().padStart(2, "0");
  var minute = date.getMinutes().toString().padStart(2, "0");
  var second = date.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

getDateString(new Date()); // 2020-09-15 20:00:08