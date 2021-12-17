/*
随机整数 [min, max]
*/
var MyFunctions = {
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // [min, max]
  }
}
console.log(MyFunctions.getRandom(5, 8)); // 5 或 6 或 7 或 8



// 错误写法：
var MyFunctions = {
  getRandom: function (min, max) {
    return parseInt(Math.random() * (max - min) + min); // [min, max)
  }
}
console.log(MyFunctions.getRandom(5, 8)); // 5 或 6 或 7