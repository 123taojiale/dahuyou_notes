const fs = require("fs");
const path = require("path");

module.exports = class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    // 实例属性
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  /**
   * 根据传入的文件路径，创建一个 File 实例对象。
   * @param {String} filename 文件路径
   * @returns File 实例
   */
  static async getFile(filename) { // 静态方法
    const stat = await fs.promises.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(filename);
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = new Date(stat.birthtime).toLocaleString();
    const updateTime = new Date(stat.mtime).toLocaleString();
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }

  /**
   * 获取文件内容，若是目录，则返回 null
   * @param {Boolean} isBuffer 是否以 buffer 形式来返回文件内容
   * @returns 文件内容
   */
  async getContent(isBuffer = false) {
    if (!this.isFile) return null; // 不是文件，是目录，返回 null。
    return isBuffer === true ?
      await fs.promises.readFile(this.filename) :
      await fs.promises.readFile(this.filename, "utf-8");
  }

  /**
   * 若是文件，则返回一个空数组，表示没有子文件。
   * 若是目录，则返回该目录下的所有直接子文件。
   * @returns 子文件
   */
  async getChildren() {
    if (this.isFile) return []; // 是文件，文件下没有子文件，所以返回 []。
    let children = await fs.promises.readdir(this.filename);
    children = children.map(name => File.getFile(path.resolve(this.filename, name)));
    return Promise.all(children);
  }
}