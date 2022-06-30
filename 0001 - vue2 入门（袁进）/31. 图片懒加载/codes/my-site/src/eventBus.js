import Vue from "vue";
const app = new Vue({});
/**
 * mainScroll 主区域滚动事件
 * 事件参数：发生滚动的容器 HTMLElement dom
 *
 * setMainScroll 设置主区域的滚动条位置
 * 事件参数：发生滚动的容器 HTMLElement dom
 */
Vue.prototype.$bus = app;
export default app;