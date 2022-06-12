interface A {
  T1: string;
}

interface B extends A {
  T2: number;
}

interface C extends A, B {
  T3: boolean;
}

let b: B = {
  T1: "123",
  T2: 123,
};

let c: C = {
  T1: "1",
  T2: 1,
  T3: false,
};