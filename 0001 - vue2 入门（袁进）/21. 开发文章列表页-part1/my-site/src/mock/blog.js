import Mock from "mockjs";
import qs from "qs";

/**
 * BlogList.vue
 */
Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  const paramsStr = options.url.split("?")[1];
  const query = qs.parse(paramsStr);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|1000-3000": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          title: "@ctitle(1,50)",
          description: "@cparagraph(1,10)",
          category: {
            "id|+1": 1,
            name: "分类@id"
          },
          "scanNumber|1-3000": 0,
          "commentNumber|1-300": 0,
          "thumb|1": [
            Mock.Random.image("300x200", "#232323", "#999", "png", "blogImg"),
            null,
          ],
          createDate: "@date('T')"
        }
      ]
    }
  })
});

/**
 * BlogCategory.vue
 */
Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-30": [{
    "id|+1": 1,
    name: "分类@id",
    "articleCount|1-100": 0,
    "order|+1": 1,
  }]
});