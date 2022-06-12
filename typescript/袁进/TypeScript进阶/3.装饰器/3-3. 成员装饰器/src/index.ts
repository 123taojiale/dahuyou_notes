export {};

function enumerable(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.enumerable = true;
}

function useless(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function () {
    console.log(`${key}方法已过期`);
  };
}

class A {
  @enumerable
  method1() {
    console.log('method1 执行了');
  }

  static method2() {}

  @enumerable
  @useless
  method3() {
    console.log('method3 执行了');
  }
}

const a = new A();
for (const key in a) {
  console.log(key); // => method1 method3
  (a as any)[key]();
}
