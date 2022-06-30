export {};

class Test {
  sum(a: number, @test b: number) {
    return a + b;
  }

  static sayHello(@test name: string) {
    console.log(`hello my name is ${name}`);
  }
}

function test(target: any, methodName: string, index: number) {
  console.log(
    target,
    target === Test.prototype,
    target === Test,
    methodName,
    index
  );
  // => {} true falae sum 1
  // => [class Test] false true sayHello 0
}
