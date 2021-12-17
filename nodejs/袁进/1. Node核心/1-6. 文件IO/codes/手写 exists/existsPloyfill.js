const fs = require("fs");

module.exports = async (filename) => {
  try {
    await fs.promises.stat(filename); // => 获取目录/文件信息，若 filename 不存在，那么会报错。
    return true;
  } catch (error) {
    // 文件不存在
    // console.dir(error); // => 看一下文件不存在的情况下，错误对象身上的一些信息。
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}