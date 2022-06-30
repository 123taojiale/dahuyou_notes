import Vue from 'vue';
import App from './App.vue';
import "@/styles/global.less";
import router from "@/router"; // 路由配置对象

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')