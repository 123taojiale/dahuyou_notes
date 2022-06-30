export {};

interface Post {
  title: string;
  content: string;
  subtitle?: string;
  // (property) Post.subtitle?: string | undefined
  readonly summary: string;
}

const hello: Post = {
  title: "Hello TypeScript",
  content: "A javascript superset.",
  summary: 'A javascript', // 摘要取自内容
}

// hello.summary = 'xxx'; // error
// Cannot assign to 'summary' because it is a read-only property.

/*
subtitle 是一个可选的成员。
相当于我们使用 string | undefined 对其进行类型约束。
*/
