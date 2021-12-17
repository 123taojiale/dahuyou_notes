"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Draft"] = 0] = "Draft";
    PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
    PostStatus[PostStatus["Published"] = 2] = "Published";
})(PostStatus || (PostStatus = {}));
var post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
    status: PostStatus.Draft, // 0 // 1 // 2
};
//# sourceMappingURL=2.js.map