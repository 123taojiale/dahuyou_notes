/*
书写一个函数，产生一个指定长度的随机字符串，字符串中只能包含大写字母、小写字母、数字
*/

/**
 * 得到一个最小值到最大值之间的随机整数
 * @param {*} min 最小值
 * @param {*} max 最大值
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

/**
 * 获取一个包含所有可能字符的字符串，每个字符仅出现一次。
 * @returns 模板字符串
 */
function getTemplate() {
  var template = "";
  for (var i = 65; i < 65 + 26; i++) {
    template += String.fromCharCode(i);
  }
  for (var i = 97; i < 97 + 26; i++) {
    template += String.fromCharCode(i);
  }
  for (var i = 48; i < 48 + 10; i++) {
    template += String.fromCharCode(i);
  }
  return template;
}


function getRandomString(len) {
  var result = "",
    template = getTemplate();
  for (var i = 0; i < len; i++) {
    var index = getRandom(0, template.length); // 从模板中随机取出一位字符
    result += template[index];
  }
  return result;
}

console.log(getRandomString(20)); // => xDw0bocdhScgwE7wMIFz