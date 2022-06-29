var Myfunctions = {
  /**
   * 判奇数
   * @param {*} num
   */
  isOdd: function (num) {
    return num % 2 !== 0;
  },
  /**
   * 判素数
   * @param {*} num
   */
  isPrime: function (num) {
    if (num <= 3) {
      return num > 1;
    }
    for (var i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  },
  /**
   * 数组求和
   * @param {*} arr
   */
  sumOfArray: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },
  /**
   * 返回数组中的最大值
   * @param {*} arr
   */
  maxOfArray: function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  },
  /**
   * 返回数组中的最小值
   * @param {*} arr
   */
  minOfArray: function (arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  },
  /**
   * 判稀松数组
   * @param {*} arr
   */
  hasEmptyInArray: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!(i in arr)) {
        return true;
      }
    }
    return false;
  },
  /**
   * 判闰年
   * @param {*} year
   */
  isLeap: function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  /**
   * 返回指定年月的天数
   * @param {*} year
   * @param {*} month
   */
  getDays: function (year, month) {
    if (this.isLeap(year) && month === 2) {
      return 29;
    } else if (!this.isLeap(year) && month === 2) {
      return 28;
    } else if ((this.isOdd(month) && month < 8) || (!this.isOdd(month) && month >= 8)) {
      return 31;
    } else {
      return 30;
    }
  },
  /**
   * 获取数组中出现频率最高的数 及其出现次数
   * @param {*} arr
   * @return {Object} {num: 出现最多的数, fre: 该数出现的次数}
   */
  getTopFreqInArray: function (arr) {
    var recordObj = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] in recordObj) {
        recordObj[arr[i]]++;
      } else {
        recordObj[arr[i]] = 1;
      }
    }
    var resultObj = {
      num: arr[0],
      fre: recordObj[arr[0]]
    };
    for (var i = 0; i < arr.length; i++) {
      if (resultObj.fre < recordObj[arr[i]]) {
        resultObj.num = arr[i];
        resultObj.fre = recordObj[arr[i]];
      }
    }
    return resultObj;
  }
}