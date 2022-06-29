import Vue from "vue";

function getComponentRootDom(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, {
      props
    })
  });
  vm.$mount(); // 挂载
  return vm.$el; // 获取根 dom
}

export default getComponentRootDom;