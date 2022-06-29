export {};
function func(a: number, b: number = 456, ...rest: number[]): string {
  return "func";
}

func(123, 456);
func(123);
func(123, 456, 789);
func(123, 456, 789, 999);

/*
...rest: number[]
表示剩余参数
*/