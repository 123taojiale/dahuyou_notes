/*
随机字符串 ==> 指定长度的 由字母(包括大小写)和数字组成的
*/
function getTemp() {
  var temp = "";
  // 获取到所有字母拼接而成的字符串
  for (var i = 65; i < 65 + 26; i++) {
    temp += String.fromCharCode(i);
  }
  for (var i = 97; i < 97 + 26; i++) {
    temp += String.fromCharCode(i);
  }
  for (var i = 48; i < 48 + 10; i++) {
    temp += String.fromCharCode(i);
  }
  return temp;
}

var MyFunctions = {
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRanString: function (len) {
    var temp = getTemp(),
      str = "";
    for (var i = 0; i < len; i++) {
      str += temp[this.getRandom(0, 26 + 26 + 10 - 1)];
    }
    return str;
  }
}
for (var i = 0; i < 10; i++) {
  console.log(MyFunctions.getRanString(5));
}