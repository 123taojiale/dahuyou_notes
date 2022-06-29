// 由于根目录下就能找到 abc.js、abc.json、abc.node、abc.mjs 中的其中一个，所以它不会再到 node_modules 中查找
require("abc"); // => abc.js