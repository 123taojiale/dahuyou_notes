import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [{
    "id|+1": 1, // 文章的id
    name: "分类@id", // 文章的名字
    "articleCount|0-300": 0, // 该分类下文章的总数
    "order|+1": 1, // 文章的序号（后台可能会有用 分类列表应该按照order的顺序排序好）
  }]
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", (options) => {
  const query = qs.parse(options.url); // 解析 url
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0, // 总数据量
      [`row|${query.limit || 20}`]: [{ // 当前页的列表数据
        id: "@guid",
        title: "@ctitle(1, 50)", // 标题 1 - 50 个汉字
        description: "@cparagraph(1, 10)", // 描述 1 - 10 条句子
        category: { // 所属分类
          "id|1-10": 0,
          name: "分类@id",
        },
        "scanNumber|0-3000": 0, // 浏览量
        "commentNumber|0-300": 0, // 评论量
        "thumb|1": [ // 当前项 50%的可能有图片 50%的可能没有图片，二选一
          Mock.Random.image("300x250", "#000", "#fff", "blogImg"), // 随机生成一张占位图
          null
        ],
        createDate: "@date('T')" // 时间戳 结果按照创建时间的倒序排序
      }],
    }
  })
});