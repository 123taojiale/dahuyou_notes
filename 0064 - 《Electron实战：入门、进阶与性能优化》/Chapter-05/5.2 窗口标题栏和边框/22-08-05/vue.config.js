const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      // nodeIntegration: true, // 添加该配置项之后，环境变量 process.env.ELECTRON_NODE_INTEGRATION 将变为 true
      preload: 'src/preload.js',
    }
  }
})
