// const fs = require("fs");
// const path = require("path");

// const catalogs = ["1-1. introduction",
//   "2-1. selector1",
//   "2-2. selector2",
//   "3-1. border&background1",
//   "3-2. border&background2",
//   "3-3. border&background3",
//   "4-1. text1",
//   "4-2. text2",
//   "5-1. box1",
//   "5-2. box2",
//   "5-3. box3",
//   "5-4. homework",
//   "6-1. transition",
//   "6-2. cubic-bezier",
//   "6-3. animation",
//   "6-4. animation2",
//   "6-5. step",
//   "6-6. step2",
//   "6-7. rotate",
//   "6-8. scale",
//   "6-9. skew",
//   "6-10. translate+perspective",
//   "6-11. perspective2",
//   "6-12. matrix",
//   "7-1. screen&px",
//   "7-2. gpu&layout"
// ];

// catalogs.forEach(async (catalog) => {
//   await fs.promises.mkdir(`./${catalog}`); // 创建一级目录
//   await fs.promises.mkdir(`./${catalog}/notes`); // 创建二级 notes 目录
//   await fs.promises.mkdir(`./${catalog}/codes`); // 创建二级 codes 目录
//   const filename1 = path.resolve(__dirname, `./${catalog}/notes/${catalog}.md`); // 创建三级 md 文件
//   await fs.promises.writeFile(filename1, "");
//   const filename2 = path.resolve(__dirname, `./${catalog}/notes/${catalog}.html`); // 创建三级 html 文件
//   await fs.promises.writeFile(filename2, "");
//   console.log(catalog, '=> success');
// })