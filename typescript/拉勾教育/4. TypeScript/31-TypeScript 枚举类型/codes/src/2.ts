export {};

enum PostStatus {
  Draft = 0,
  Unpublished = 1,
  Published = 2,
}

const post = {
  title: "Hello TypeScript",
  content: "TypeScript is a typed superset of JavaScript.",
  status: PostStatus.Draft, // 0 // 1 // 2
};
