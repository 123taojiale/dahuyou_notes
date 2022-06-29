// 全局注册一个 v-test 指令
Vue.directive('test', {
  bind: function (el, bindings) {
    console.log('bind', el)
  },
  inserted: function (el, bindings) {
    console.log('inserted', el)
  },
  update: function (el, bindings) {
    console.log('update', el)
  },
  componentUpdated: function (el, bindings) {
    console.log('componentUpdated', el)
  },
  unbind: function (el, bindings) {
    console.log('unbind', el)
  }
})