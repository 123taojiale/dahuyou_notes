export {};

type constructor = new (...args: any[]) => object;

function d1() {
  console.log("d1");
  return function (target: constructor) {
    console.log("d1 decorator");
  }
}

function d2() {
  console.log("d2");
  return function (target: constructor) {
    console.log("d2 decorator");
  }
}

@d1()
@d2()
class A {
  prop1: string;
}