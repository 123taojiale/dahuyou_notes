// 捕获组可以命名 ==> 具名捕获组
var s = "2015-5-1, 2019-6-19, 2000-04-28";
var reg = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/g;
while (result = reg.exec(s)) {
  console.log(result.groups, // 捕获组
    result.groups.year, // 捕获组中的指定项，具名捕获组：year
    result.groups.month, // 捕获组中的指定项，具名捕获组：month
    result.groups.day); // 捕获组中的指定项，具名捕获组：day
}

/* output
{ year: '2015', month: '5', day: '1' } 2015 5 1
{ year: '2019', month: '6', day: '19' } 2019 6 19
{ year: '2000', month: '04', day: '28' } 2000 04 28
*/