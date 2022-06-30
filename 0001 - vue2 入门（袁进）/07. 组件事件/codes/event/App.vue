<template>
  <div id="app">
    <test @boxClicked="fun" />
  </div>
</template>

<script>
import Test from "./test.vue";

export default {
  name: "App",
  components: {
    Test,
  },
  methods: {
    fun(e) {
      console.log(e);
    }
  }
};
</script>