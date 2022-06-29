export {};

function d() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = true;
  };
}

class A {
  @d()
  method1() {}

  @d()
  static method2() {}

  @d()
  method3() {}
}

const a = new A();
for (const key in a) {
  console.log(key); // => method1 method3
}
