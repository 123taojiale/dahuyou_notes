<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >

    <a
      @click="handleClick(page)"
      v-for="(page, i) in nums"
      :key="i"
      :class="{ selected: page === current }"
      >{{ page }}</a
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

<style lang="less" scoped>
@import url(~@/styles/var.less);

.pager-container {
  color: @primary;
  a {
    margin: 0 6px;
    cursor: pointer;

    // 不可点击的样式
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }

    // 选中样式
    &.selected {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    lastPage() {
      return Math.ceil(this.total / this.limit);
    },
    // 可见的最小页码
    min() {
      let min = Math.floor(this.current - this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 可见的最大页码
    max() {
      let max = this.min + this.visibleNumber - 1;
      if (max > this.lastPage) {
        max = this.lastPage;
      }
      return max;
    },
    // 可见的页码组成的数组
    nums() {
      const nums = [];
      for (let i = this.min; i <= this.max; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
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
