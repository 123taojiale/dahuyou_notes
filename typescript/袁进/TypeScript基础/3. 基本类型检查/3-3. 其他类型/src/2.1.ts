export default 1;

let test: string | number | undefined;

if (typeof test === "string") {
  console.log("test is string");
} else if (typeof test === "number") {
  console.log("test is number");
} else {
  console.log("test is undefined");
}
