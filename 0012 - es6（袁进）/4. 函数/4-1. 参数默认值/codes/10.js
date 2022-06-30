function test(a, b = a) { // 先声明的 a 再拿 a 给 b 赋值 不会报错
  console.log(a, b);
}

test(1); // 1 1

function test(a = b, b) { // 该行报错 因为拿 b 给 a 赋值的时候 b 还没声明
  console.log(a, b);
}

test(undefined, 1); // Uncaught ReferenceError: Cannot access 'b' before initialization