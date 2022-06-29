export {};
function func(a: number, b?: number): string {
  return 'func';
}

func(123, 456);
func(123);
/*
?: 表示可选参数
*/