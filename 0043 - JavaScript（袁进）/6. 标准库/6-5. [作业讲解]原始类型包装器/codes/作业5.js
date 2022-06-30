/*
从一个标准的身份证号中取出用户的出生年月日和性别，保存到对象中。
示例："524713199703020014"
{
  birthYear: 1997
  birthMonth: 3
  birthDay: 2
  gender: "男" // 性别看倒数第二位，奇数为男，偶数为女
}
*/

function getInfoFromPID(pid) {
  return {
    birthYear: parseInt(pid.substr(6, 4)),
    birthMonth: parseInt(pid.substr(10, 2)),
    birthDay: parseInt(pid.substr(12, 2)),
    gender: pid[pid.length - 2] % 2 === 0 ? "女" : "男"
  }
}

console.log(getInfoFromPID("524713199703020014"));