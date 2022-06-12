export {};

function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.enumerable = true;
};

class A {
  @enumerable
  method1() {}

  static method2() {}

  @enumerable
  method3() {}
}

const a = new A();
for (const key in a) {
  console.log(key); // => method1 method3
}