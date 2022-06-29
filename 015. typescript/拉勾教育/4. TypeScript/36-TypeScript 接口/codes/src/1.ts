export {};

interface Post {
  title: string; // , // ;
  content: string;
}

function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

printPost({
  title: "Hello TypeScript",
  content: "A javascript superset.",
});

/*
接口字段之间的分隔符支持 3 种写法
  ,
  ;
  空
*/
