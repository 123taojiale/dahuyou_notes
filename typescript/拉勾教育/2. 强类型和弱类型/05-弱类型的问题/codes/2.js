function sum(a, b) {
  return a + b;
}

sum(100, 100); // => 200
sum(100, '100'); // => '100100'

/*
sum 函数，是用来对传入的两个数字进行求和的。
但是，由于我们传入的形参的类型不明确，导致了函数功能发生变化。
*/