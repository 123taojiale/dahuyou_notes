<template>
  <div class="pager-container" v-if="lastPage > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(item)"
      v-for="(item, i) in visibleNums"
      :key="i"
      :class="{ active: current === item }"
      >{{ item }}</a
    >
    <a
      :class="{ disabled: current === lastPage }"
      @click="handleClick(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === lastPage }"
      @click="handleClick(lastPage)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码量
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 最后一页
    lastPage() {
      return Math.ceil(this.total / this.limit);
    },
    // 可见的最小页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 可见的最大页码
    visibleMax() {
      let max = this.current + this.visibleNumber - 1;
      if (max > this.lastPage) {
        max = this.lastPage;
      }
      return max;
    },
    // 可见的页码所组成的数组
    visibleNums() {
      const nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    // 抛出 pageChange 事件
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.lastPage) {
        newPage = this.lastPage;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.pager-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: @primary;

  a {
    margin: 0 6px;
    cursor: pointer;

    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      cursor: text;
      font-weight: bold;
    }
  }
}
</style>