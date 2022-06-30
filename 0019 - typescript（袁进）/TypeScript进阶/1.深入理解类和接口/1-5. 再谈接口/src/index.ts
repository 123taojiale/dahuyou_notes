// import { Animal, Dog, Lion, Monkey, Tiger } from "./animals";
// import { IFireShow } from "./interfaces";

// const animals: Animal[] = [
//   new Lion("狮子", 1),
//   new Tiger("老虎", 2),
//   new Monkey("猴子", 3),
//   new Dog("狗1", 4),
//   new Dog("狗2", 5),
// ];

// // 需求2 所有具备「火圈表演」能力的动物进行「火拳表演」
// const hasFireShow = (ani: object): ani is IFireShow => {
//   if (
//     (ani as IFireShow).singleFire &&
//     (ani as IFireShow).doubleFire
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// animals.forEach((a) => {
//   if (hasFireShow(a)) {
//     a.singleFire();
//     a.doubleFire();
//   }
// });

class A {
  private a1: string = "";
  private a2: string = "";
}

class B {
  b1: number = 0;
  b2: number = 0;
}

interface C extends A, B {}

let c: C