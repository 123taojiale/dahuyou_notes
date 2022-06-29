<template>
  <ul class="right-list-container">
    <li class="item" v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        v-if="item.aside"
        class="aside"
        >{{ item.aside }}</span
      >
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
    font-size: 14px;
    line-height: 2em;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}

.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
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
      // 若点击的就是已经被选中的那一项，那么，不会抛出 select 事件。
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>