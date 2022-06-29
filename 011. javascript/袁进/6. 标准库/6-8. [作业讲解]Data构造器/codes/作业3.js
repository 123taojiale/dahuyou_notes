/*
根据系统当前的月份，输出这一个月每一天的星期
2019年6月1日：星期六
2019年6月2日：星期日
.....
2019年6月30日：星期日
*/

function print() {
  var now = new Date();
  var m = now.getMonth() + 1;
  var y = now.getFullYear();
  var days = new Date(y, m, 0).getDate(); // days 本月的总天数 0 表示上个月的最后一天
  for (var i = 1; i <= days; i++) {
    console.log(`${y}年${m}月${i}日：星期${getDayOfWeek(y, m, i)}`);
  }
}

function getDayOfWeek(year, month, day) {
  var d = new Date(year, month - 1, day);
  var day = d.getDay(); //得到星期(0[周日]-6[周六])
  switch (day) {
    case 0:
      return "日";
    case 1:
      return "一";
    case 2:
      return "二";
    case 3:
      return "三";
    case 4:
      return "四";
    case 5:
      return "五";
    case 6:
      return "六";
  }
}

print();