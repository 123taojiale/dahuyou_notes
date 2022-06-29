class User {
  loginid: string
}

class Article {}

type twoParamsConstructor = new (arg1: any, arg2: any) => User
type twoParamsConstructor2 = new (arg1: any, arg2: any) => Article

type Inst = InstanceType<twoParamsConstructor>;
// => type Inst = User
type Inst2 = InstanceType<twoParamsConstructor2>;
// => type Inst2 = Article