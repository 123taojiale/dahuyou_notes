const article = {
  title: "文章标题",
  content: "文章内容",
  comments: [{
    content: "评论1",
    user: {
      id: 1,
      name: "用户名1"
    }
  }, {
    content: "评论2",
    user: {
      id: 2,
      name: "用户名2"
    }
  }]
};

const {
  content: content2,
  user: {
    name: name2,
  }
} = article.comments[1]; // 此时解构的是一个对象

console.log(name2, content2); // 用户名2 评论2