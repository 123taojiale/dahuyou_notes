export {};

function d() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(key, target === A.prototype, target === A, descriptor);
  };
}

class A {
  @d()
  method1() {}

  @d()
  static method2() {}
}
