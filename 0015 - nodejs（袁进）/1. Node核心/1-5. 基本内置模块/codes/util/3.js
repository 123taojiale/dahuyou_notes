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