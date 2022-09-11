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

/*
需求：有一个 myDirectory 目录，我们不知道目录中的内容，现在想要在该目录下创建一个名为 sub 的子目录，但是，如果已经存在 sub 子目录的话，那么就不再创建 sub，若不存在，才执行创建命令。

exists api 就是专门用来预先判断目录是否存在的，但是，这个 api 已经被弃用了，而我们后面还有可能会需要用到这个 api，所以得了解它的实现原理。
 */