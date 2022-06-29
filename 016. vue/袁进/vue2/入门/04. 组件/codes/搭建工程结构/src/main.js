// main.js 是入口模块，作用是创建 vue 实例。
import Vue from "./vue.browser.js";
import App from "./App.js" // 导入组件 App

new Vue({
  render: h => h(App), // 渲染组件 App
  // components: {
  //   App,
  // },
  // template: `<App />`
}).$mount("#app"); // 将组件挂载到 #app 元素身上