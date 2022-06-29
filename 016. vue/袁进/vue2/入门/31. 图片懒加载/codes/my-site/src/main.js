import Vue from 'vue';
import App from './App.vue';
import router from "@/router"; // 路由配置对象
import showMessage from './utils/showMessage';
import "./mock"; // 定义拦截规则
import vLoading from "./directives/loading.js";
import vLazy from "./directives/lazy.js";
import "./eventBus";

Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')