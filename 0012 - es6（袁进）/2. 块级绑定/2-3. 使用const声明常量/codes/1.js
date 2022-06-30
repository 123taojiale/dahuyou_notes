const obj = {
  a: 1,
  b: 2
};

obj.a = 3; // 不会报错，因为我们并没有改变 obj 的指向，obj 依旧指向原来的那块内存空间。
obj; // {a: 3, b: 2}

obj = 123; // TypeError: Assignment to constant variable.
/*
Assignment to .. => 给...赋值
constant variable => 常量
*/