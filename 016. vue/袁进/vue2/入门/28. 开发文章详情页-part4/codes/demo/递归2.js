const toc = [{
    name: "概述",
    anchor: "article-md-title-1"
  },
  {
    name: "简单请求",
    anchor: "article-md-title-2",
    children: [{
        name: "简单请求的判定",
        anchor: "article-md-title-3"
      },
      {
        name: "简单请求的交互规范",
        anchor: "article-md-title-4"
      },
    ],
  },
  {
    name: "需要预检的请求",
    anchor: "article-md-title-5",
  },
  {
    name: "附带身份凭证的请求",
    anchor: "article-md-title-6",
  },
  {
    name: "一个额外的补充",
    anchor: "article-md-title-7",
  },
];

const activeAnchor = "article-md-title-4";

// 已知需要被选中的 anchor 为 "article-md-title-4"，以此来生成一个带有 isSelect 属性的 toc 数组
function tocWithSelected(toc) {
  const getToc = (toc = []) => {
    return toc.map(t => {
      if (t.children && t.children.length) {
        return {
          ...t,
          isSelect: t.anchor === activeAnchor,
          children: getToc(t.children)
        }
      } else {
        return {
          ...t,
          isSelect: t.anchor === activeAnchor,
        }
      }
    });
  }
  return getToc(toc);
}

const result = tocWithSelected(toc);
console.log(result);


/*
[
  {
    "name": "概述",
    "anchor": "article-md-title-1",
    "isSelect": false
  },
  {
    "name": "简单请求",
    "anchor": "article-md-title-2",
    "children": [
      {
        "name": "简单请求的判定",
        "anchor": "article-md-title-3",
        "isSelect": false
      },
      {
        "name": "简单请求的交互规范",
        "anchor": "article-md-title-4",
        "isSelect": true
      }
    ],
    "isSelect": false
  },
  {
    "name": "需要预检的请求",
    "anchor": "article-md-title-5",
    "isSelect": false
  },
  {
    "name": "附带身份凭证的请求",
    "anchor": "article-md-title-6",
    "isSelect": false
  },
  {
    "name": "一个额外的补充",
    "anchor": "article-md-title-7",
    "isSelect": false
  }
]
*/