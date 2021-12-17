const template = `<button @click="count ++">点击了 {{count}} 次</button>`;

export default {
  // MyButton 组件的数据
  data() {
    return {
      count: 0
    }
  },
  // MyButton 组件的模板
  template,
}