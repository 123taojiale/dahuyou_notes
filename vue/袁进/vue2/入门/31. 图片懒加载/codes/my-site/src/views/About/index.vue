<template>
  <div class="about-container">
    about me...
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
      content: "关于我，待开发。。。",
      type: "info",
      duration: 500,
    });
  },
};
</script>