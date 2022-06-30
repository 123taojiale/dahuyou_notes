export default 1;

let test: string | number | undefined;

if (typeof test === 'string') {
  test.toUpperCase();
} else if (typeof test === 'number') {
  Math.round(test)
} else {
  console.log('test is undefined');
}
