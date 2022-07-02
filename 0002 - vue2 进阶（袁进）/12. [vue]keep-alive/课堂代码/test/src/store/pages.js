// 存放那些需要缓存的页面数据
export default {
  namespaced: true,
  state: {
    cachedRouterNameList: [], // 需要缓存的路由的 name
  },
  mutations: {
    addPage(state, newRouterName) {
      if (!state.cachedRouterNameList.includes(newRouterName)) state.cachedRouterNameList = state.cachedRouterNameList.concat(newRouterName);
    },
    removePage(state, newRouterName) {
      state.cachedRouterNameList = state.cachedRouterNameList.filter(item => item !== newRouterName);
    }
  },
}