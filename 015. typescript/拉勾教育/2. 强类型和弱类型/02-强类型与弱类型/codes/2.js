function foo(num) {
  console.log(num);
}

foo(100); // ok

foo("100"); // ok

foo(parseInt("100")); // ok