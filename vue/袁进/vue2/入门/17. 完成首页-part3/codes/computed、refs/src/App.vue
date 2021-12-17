<template>
  <div id="app" ref="container">
    <!-- 模板中对 c1 有依赖，在注入阶段就会调用计算属性 c1，此时还没有挂载，所以 this.$refs 还是 undefined。 -->
    <button>{{ c1 }}</button>
    <button @click="printC2Refs">按钮2</button>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    c1() {
      console.log("c1 的 $refs", this.$refs); // {}
      return "按钮1";
    },
    c2() {
      console.log("c2 的 $refs", this.$refs); // {container: div#app }
      return "按钮2";
    },
  },
  methods: {
    printC2Refs() {
      // 计算属性 c2 并没有写在模板中，所以在数据注入阶段，c2 并不会被调用。
      this.c2; // 调用 c2 ，此时已经完成了注入，所以 $refs 是可以访问到的。
    },
  },
};
</script>
