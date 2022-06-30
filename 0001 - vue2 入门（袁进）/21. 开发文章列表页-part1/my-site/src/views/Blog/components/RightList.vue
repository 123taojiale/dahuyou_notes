<template>
  <ul class="right-list-container">
    <li class="item" v-for="(item, i) in list" :key="i">
      <!-- @click="handleClick(item)" 抛出的 select 事件不能绑定在 li 元素身上，而应该绑定在 span 元素身上。 -->
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <!-- RightList 递归，不能写在 li 元素外边，否则将获取不到 item 就更别谈啥 children 了 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.right-list-container {
  .right-list-container {
    margin-left: 1em;
  }

  .item {
    line-height: 1.5em;
    cursor: pointer;

    .active {
      color: @primary;
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>