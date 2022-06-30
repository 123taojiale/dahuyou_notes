<template>
  <div class="test-container">
    <Pager
      :current="current"
      :total="total"
      :limit="limit"
      :visibleNumber="visibleNumber"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  padding: 20px;
  width: 70%;
  margin: 3em auto;
  border: 1px solid #ddd;

  display: flex;
  justify-content: center;
}
</style>

<script>
import Pager from "./";

export default {
  data() {
    return {
      current: 1,
      total: 102,
      limit: 10,
      visibleNumber: 10,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("页码发生改变了，新页码：", newPage);
    },
  },
};
</script>