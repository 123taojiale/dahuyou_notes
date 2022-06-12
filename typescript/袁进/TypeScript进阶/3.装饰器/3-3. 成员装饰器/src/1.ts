export {};

function d(target: any, key: string) {
  console.log(key, target, target === A.prototype, target === A);
}

class A {
  @d
  prop1: string;

  @d
  prop2: number;

  @d
  static prop3: string;
}