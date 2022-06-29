import Vue from "vue";

/**
 * 获取组件的根DOM
 * @param {Object} comp 组件的配置对象
 * @param {Object} props 组件的属性对象
 */
export default function (comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, {
      props,
    })
  });
  vm.$mount(); // 挂载
  console.log(vm.$el);
  return vm.$el; // 返回 组件渲染的根DOM
}