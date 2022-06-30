import "reflect-metadata";

@Reflect.metadata("inClass", "A")
class Test {
  @Reflect.metadata("inMethod", "B")
  public hello(): string {
    return "hello world";
  }

  @Reflect.metadata("prop", "test...")
  test: string = "123";
}

const t = new Test();

console.log(Reflect.getMetadata("inClass", Test)); // => A
console.log(Reflect.getMetadata("inMethod", t, "hello")); // => B
console.log(Reflect.getMetadata("prop", t, "test")); // => test...