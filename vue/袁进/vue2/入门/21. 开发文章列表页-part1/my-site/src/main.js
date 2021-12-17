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

// 测试两个接口的模拟数据
import * as blogApi from "./api/blog.js";

blogApi.getBlogs().then(r => {
  console.log('博客', r);
})

blogApi.getBlogTypes().then(r => {
  console.log('博客分类', r);
})