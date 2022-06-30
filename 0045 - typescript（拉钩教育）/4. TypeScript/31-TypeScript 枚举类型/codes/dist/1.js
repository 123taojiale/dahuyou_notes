"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 文章的发布状态
var PostStatus = {
    Draft: 0,
    Unpublished: 1,
    Published: 2, // 已发布
};
// 文章对象
var post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
    status: PostStatus.Draft, // 0 // 1 // 2
};
//# sourceMappingURL=1.js.map