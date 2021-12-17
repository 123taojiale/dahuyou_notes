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

// 随便测试一下接口
import * as blogApi from "./api/blog";

blogApi.getBlog("asdfasdf").then((r) => {
  console.log('博客详情页',r);
});

blogApi
  .postComment({
    nickname: "昵称",
    content: "评论内容，纯文本",
    blogId: "123",
  })
  .then((r) => {
    console.log('提交评论',r);
  });

blogApi.getComments("123123").then((r) => {
  console.log('分页获取博客', r);
});