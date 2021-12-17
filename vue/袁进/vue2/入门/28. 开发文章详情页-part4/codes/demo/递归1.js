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

// 要求获取到 toc 数组中的所有 anchor
function getAnchors(toc) {
  const result = [];
  const addAnchor = (toc = []) => {
    for (const t of toc) {
      result.push(t.anchor);
      if (t.children && t.children.length > 0) {
        addAnchor(t.children);
      }
    }
  }
  addAnchor(toc);
  return result;
}

const result = getAnchors(toc);
console.log(result);
/*
[
  'article-md-title-1',
  'article-md-title-2',
  'article-md-title-3',
  'article-md-title-4',
  'article-md-title-5',
  'article-md-title-6',
  'article-md-title-7'
]
*/