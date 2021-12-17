<template>
  <div class="test-container">
    <Pager
      :current="current"
      :limit="limit"
      :total="total"
      :visibleNumber="visibleNumber"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<style lang="less" scoped>
.test-container {
  border: 1px solid #ddd;
  width: 800px;
  height: 300px;
  margin: 3em auto;
}
</style>

<script>
import Pager from "./index.vue";
import "@/styles/global.less";

export default {
  data() {
    return {
      current: 1,
      limit: 10,
      total: 103,
      visibleNumber: 10,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("页码改变了", newPage);
    },
  },
};
</script>