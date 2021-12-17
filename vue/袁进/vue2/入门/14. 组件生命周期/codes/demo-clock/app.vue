<template>
  <div class="app">
    <!-- Clock 组件的 beforeDestroy 钩子函数会在 v-if 为 false 时调用。 -->
    <Clock v-if="show" />
    <button @click="show = !show">切换显示</button>
  </div>
</template>

<script>
import Clock from "./clock.vue";

export default {
  components: {
    Clock,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>