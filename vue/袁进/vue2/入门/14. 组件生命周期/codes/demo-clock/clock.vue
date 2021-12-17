<template>
  <div class="clock">
    <h1>{{ currentTime }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      currentTime: new Date().toLocaleString(),
    };
  },
  created() {
    console.log("created");
    this.timer = setInterval(() => {
      console.log("时间更新了");
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>