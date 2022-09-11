const fsPromises = require('fs/promises'),
  path = require('path')

module.exports = class File {
  /**
   *
   * @param {String} filename 文件绝对路径
   * @param {String} name 文件名
   * @param {String} ext 文件后缀名
   * @param {Boolean} isFile 是否是文件
   * @param {Number} size 文件大小（B）
   * @param {String} accessTime 最近一次的文件访问时间
   * @param {String} modifiedTime 最近一次的文件修改时间
   * @param {String} statusChangeTime 最近一次的文件状态改变时间
   * @param {String} birthTime 文件的创建时间
   */
  constructor (
    filename,
    name,
    ext,
    isFile,
    size,
    accessTime,
    modifiedTime,
    statusChangeTime,
    birthTime
  ) {
    this.filename = filename
    this.name = name
    this.ext = ext
    this.isFile = isFile
    this.size = size
    this.accessTime = accessTime
    this.modifiedTime = modifiedTime
    this.statusChangeTime = statusChangeTime
    this.birthTime = birthTime
  }

  /**
   * 创建 File 实例
   * @param {String} filename 绝对路径
   * @returns File Instance
   */
  static async getFileIns (filename) {
    const name = path.basename(filename),
      ext = path.extname(filename),
      stat = await fsPromises.stat(filename),
      isFile = stat.isFile(),
      size = isFile ? stat.size : 0, // => 在 mac 上测试时，发现目录也是有 size 的，所以这里特殊处理一下
      accessTime = stat.atime.toLocaleString(),
      modifiedTime = stat.mtime.toLocaleString(),
      statusChangeTime = stat.ctime.toLocaleString(),
      birthTime = stat.birthtime.toLocaleString()

    console.log(stat)
    return new File(
      filename,
      name,
      ext,
      isFile,
      size,
      accessTime,
      modifiedTime,
      statusChangeTime,
      birthTime
    )
  }

  /**
   * 获取文件内容
   * @param {Boolean} isBuffer 内容是否以 Buffer 的格式返回
   * @returns 文件内容（如果是目录，获取到的是 null）
   */
  async getContent (isBuffer = false) {
    // 目录
    if (!this.isFile) return null

    // 文件
    return isBuffer
      ? await fsPromises.readFile(this.filename) // 没有指定编码，将以 buffer 格式返回
      : await fsPromises.readFile(this.filename, 'utf-8')
  }

  /**
   * 读取目录中的内容
   * @returns 目录中的内容（如果是文件，则返回空数组 []）
   */
  async getChildren () {
    // 文件
    if (this.isFile) return []

    // 目录
    let children = await fsPromises.readdir(this.filename)
    children = children.map(
      async it => await File.getFileIns(path.resolve(this.filename, it))
    )

    return Promise.all(children)
  }
}
