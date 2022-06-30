const obj = {
  a: 1,
  b: 2
};

// 这个知名符号对应的成员可以被编辑 直接给它赋值即可
obj[Symbol.toPrimitive] = () => {
  return 'dahuyou'
}

obj + 3; // => dahuyou3
obj * 3; // => NaN