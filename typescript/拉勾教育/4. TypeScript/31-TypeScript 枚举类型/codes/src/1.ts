export {};

// 文章的发布状态
const PostStatus = {
  Draft: 0, // 草稿
  Unpublished: 1, // 未发布
  Published: 2, // 已发布
};

// 文章对象
const post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
