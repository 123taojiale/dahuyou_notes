<template>
  <div class="demo-container">
    demo
    <Empty />
  </div>
</template>

<script>
import Empty from "@/components/Empty";

export default {
  components: {
    Empty,
  },
  created() {
    this.$showMessage({
      content: "项目和效果页，待开发。。。",
      type: "info",
      duration: 500000,
    });
  },
};
</script>