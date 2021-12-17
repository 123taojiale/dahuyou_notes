<template>
  <div class="blog-toc-container">
    <h2>文章分类</h2>
    <RightList :list="toc" @select="handleSelect" />
  </div>
</template>

<style lang="less" scoped>
h2 {
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0 0 1em;
}
</style>

<script>
import RightList from "./RightList.vue";

export default {
  props: ["toc"],
  components: {
    RightList,
  },
  methods: {
    // 依据当前被点击的目录，来更新路由信息中的 hash 部分，从而滚动到指定的标题。
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
};
</script>