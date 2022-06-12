Object.defineProperty(exports, "__esModule", {
  value: true
});
const animals_1 = require("./animals");
const animals = [
  new animals_1.Lion("狮子", 1),
  new animals_1.Tiger("老虎", 2),
  new animals_1.Monkey("猴子", 3),
  new animals_1.Dog("狗1", 4),
  new animals_1.Dog("狗2", 5),
];
const hasFireShow = (ani) => {
  if (ani.singleFire &&
    ani.doubleFire) {
    return true;
  } else {
    return false;
  }
};
animals.forEach((a) => {
  if (hasFireShow(a)) {
    a.singleFire();
    a.doubleFire();
  }
});