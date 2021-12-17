/*
给定用户的生日（年、月、日），计算该用户的年龄
补充：
1. 年龄的处理逻辑：
  - 生日已过：当前年份 - 出生年份；
  - 生日还没过：当前年份 - 出生年份 - 1；
2. 闰年的处理逻辑
  - 若出生在闰年的 2/29，那么认为该该用户在平年时，生日为 2/28
*/

/**
 * 判闰年
 */
function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 获取年龄
 */
function getAge(year, month, day) {
  var now = new Date();
  var nowAge = now.getFullYear() - year;
  if (month === 2 && day === 29 && !isLeap(now.getFullYear())) {
    day = 28;
  }
  var birthdayThisYear = new Date(now.getFullYear(), month - 1, day);
  if (now < birthdayThisYear) {
    // 会自动调用 valueOf 方法，将得到的结果进行比较 => now.valueOf() < birthdayThisYear.valueOf()
    nowAge--;
  }
  return nowAge;
}

getAge(2000, 2, 29); // => 21


/*
扩展：计算还有多少天过生日
提示：月份从 0 开始，天数从 1 开始
*/
function getDaysToBirthday(month, day) {
  var now = new Date();
  var thisYear = now.getFullYear();
  var birthdayThisYear = new Date(thisYear, month - 1, day);
  if (birthdayThisYear < now) { // 生日已过
    birthdayThisYear.setFullYear(now.getFullYear() + 1);
  }
  var days = (birthdayThisYear - now) / (24 * 60 * 60 * 1000);
  return Math.ceil(days);
}

getDaysToBirthday(6, 29); // => 306