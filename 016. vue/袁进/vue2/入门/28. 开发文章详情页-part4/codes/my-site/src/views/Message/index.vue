<template>
  <div class="message-container">
    message
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
      content: "留言页，待开发。。。",
      type: "info",
      duration: 500,
    });
  },
};
</script>