import "reflect-metadata";

class User {
  @Reflect.metadata("a", "1")
  loginId: string;

  @Reflect.metadata("b", "2")
  age: number;
}
