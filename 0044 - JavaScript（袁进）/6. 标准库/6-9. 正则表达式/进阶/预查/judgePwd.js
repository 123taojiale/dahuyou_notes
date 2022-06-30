function judgePwd(pwd) {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#_,.]).{6,12}$/.test(pwd)) {
    return "强";
  } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/.test(pwd)) {
    return "中";
  } else if (/^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/.test(pwd)) {
    return "弱";
  } else {
    return "不满足要求";
  }
}

console.log(judgePwd("asdADFF4.343")); // => 强

/* 判断密码强度的逻辑：
密码长度必须是6-12位
出现小写字母、大写字母、数字、特殊字符(!@#_,.)  -> 强
出现小写字母、大写字母、数字  -> 中
出现小写字母、大写字母  -> 弱
其他  -> 不满足要求
*/