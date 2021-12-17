import Vue from 'vue';
import App from './App.vue';
import router from "@/router"; // 路由配置对象
import showMessage from './utils/showMessage';
import "./mock"; // 定义拦截规则
import vLoading from "./directives/loading.js";

Vue.directive("loading", vLoading);

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')