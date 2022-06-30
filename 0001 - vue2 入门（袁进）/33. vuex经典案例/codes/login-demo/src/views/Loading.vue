<template>
  <h1>正在登录中...</h1>
</template>

<script>
export default {
  created() {
    // this.$store.watch() 会返回一个新的函数，调用该函数，即可取消监听。
    this.unWatch = this.$store.watch(
      () => this.$store.getters["loginUser/status"], // 该函数的返回值，是被监听的值
      (status) => { // 参数1：新的值；参数2：旧的值；
        if (status !== "loading") {
          this.$router
            .push(this.$route.query.returnurl || "/home")
            .catch(() => {}); // 捕捉一个 错误，但是不作处理。（该错误是 vue-router 给的一个警告，不影响。。。）
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    // 取消监听
    this.unWatch();
  },
};
</script>

<style></style>
