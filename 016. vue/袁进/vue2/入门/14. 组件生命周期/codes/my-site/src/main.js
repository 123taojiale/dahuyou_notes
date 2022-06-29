import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import showMessage from "./utils/showMessage.js";
import "./mock"; // 定义拦截规则
import "./api/banners.js"; // 获取远程数据

Vue.prototype.$showMessage = showMessage;
console.log(showMessage);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')