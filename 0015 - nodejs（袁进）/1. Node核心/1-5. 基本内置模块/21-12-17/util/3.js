const util = require("util");

const obj1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};

const obj2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5,
      // g: 6
    }
  }
};

console.log(util.isDeepStrictEqual(obj1, obj2)); // => true

/*
util.isDeepStrictEqual

将两个对象进行深度比较，判断是否严格相等

🤔 什么叫深度严格相等？
obj1 里边有的和 obj2 里边有的，完全相同。
*/