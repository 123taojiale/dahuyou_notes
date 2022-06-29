export {};
function func(a: number, b: number = 456): string {
  return 'func';
}

func(123, 456);
func(123);
/*
b: number = 456
表示参数 b 的默认值是 456
*/