<script>
import dahuyou from "./dahuyou.vue";

export default {
  components: {
    dahuyou,
  },
  render: (h) =>
    h(
      // 名称直接写
      "div",
      // 属性配置到对象中
      {
        class: "test-container",
      },
      // 内容配置到数组中
      [
        "test-container",
        h("dahuyou", {
          props: {
            test: "http://dahuyou.top",
          },
        }),
      ]
    ),
  // 外层有一个 div，该 div 的 class 属性的值为 test-container
  // 该 div 的内容为 test-container 以及一个名为 dahuyou 的组件，dahuyou 组件的属性配置在 props 字段里面。
};
</script>

// 下面是最终渲染出来的结果： /*
<div class="test-container">
  test-container
  <a href="http://dahuyou.top">dahuyou.top</a>
</div>
*/
