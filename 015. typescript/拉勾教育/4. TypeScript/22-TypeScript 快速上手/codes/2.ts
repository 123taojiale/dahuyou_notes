const hello = (name: string) => {
  console.log(`Hello, ${name}`);
};

// hello(123); // => Argument of type 'number' is not assignable to parameter of type 'string'.
hello('TypeScript');
export {};