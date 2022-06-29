export {};
function func(a: number, b: number): string {
  return 'func';
}

func(123, 456);

/*
func(123)
// Expected 2 arguments, but got
// 1.ts(1, 26): An argument for 'b' was not provided.

func(123, 456, 789)
// Expected 2 arguments, but got 3.

这两种写法在 ts 中都会报错，这一点类似于强类型语言。
当我们调用函数时，参数个数，参数数据类型，都必须与形参相同。
*/