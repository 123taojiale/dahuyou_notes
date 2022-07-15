import Loading from "../components/Loading.vue";
import ErrorComp from "../components/Error.vue";
import { defineAsyncComponent, h } from "vue";
import delay from "./delay";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

NProgress.configure({
  trickleSpeed: 50,
  showSpinner: false,
});

// 加载异步组件
export const getAsyncComponent = (path) => {
  return defineAsyncComponent({
    loader: async () => {
      await delay(); // 默认随机延时 1-3 秒
      // 模拟加载出错的情况
      if (Math.random() < 0.5) {
        // console.log('error...');
        throw new Error('error');
        // 注意，这里需要 throw 抛出错误，而不是 return 返回一个错误
      }
      const comp = await import(path);
      return comp;
    },
    loadingComponent: Loading,
    errorComponent: {
      render() {
        return h(ErrorComp, "出错了！！！")
      }
    },
  })
}

// 加载异步页面
export const getAsyncPageComponent = (path) => {
  return defineAsyncComponent({
    loader: async () => {
      // 页面组件正在加载中 - 开始 nprogress
      NProgress.start();
      await delay(); // 默认随机延时 1-3 秒
      const comp = await import(path);
      // 页面组件加载完成 - 结束 nprogress
      NProgress.done();
      return comp;
    },
    loadingComponent: Loading,
  })
}
