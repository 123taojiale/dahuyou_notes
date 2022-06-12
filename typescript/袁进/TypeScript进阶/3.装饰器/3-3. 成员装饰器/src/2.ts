export {};

function d(target: any, key: string) {
  if (!target.__props) target.__props = [];
  target.__props.push(key);
}

class A {
  @d
  prop1: string;

  @d
  prop2: number;

  @d
  static prop3: string;
}

console.log((A.prototype as any).__props); // [ 'prop1', 'prop2' ]
