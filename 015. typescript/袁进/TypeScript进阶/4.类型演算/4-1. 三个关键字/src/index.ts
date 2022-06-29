interface User {
  loginid: string;
  loginpwd: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
}

// 将所有的属性值约束为 string 类型
type valToString<T> = {
  [p in keyof T]: string;
};

// 将所有属性都变为可选的
type beOptional<T> = {
  [p in keyof T]?: T[p];
};

// 将所有属性变为只读的
type beReadonly<T> = {
  readonly [p in keyof T]: T[p];
};

const u: valToString<User> = {
  loginid: "",
  loginpwd: "",
  age: ""
}

const u2: beOptional<User> = {};

const a: beReadonly<Article> = {
  title: "",
  content: ""
}

// a.title = "123" // ×












