**安装：**

`npm i -D webpack webpack-cli`

**使用：**

- `webpack --mode=development`：打包结果适合运行在开发环境，有助于调试
- `webpack --mode=production`：打包结果适合运行在生成环境，尽可能压缩体积，打包结果丑化到极致，不便于调试

可以将命令配置到 `package.json` 文件中，以便后续使用。