<template>
  <div class="app-container">
    <AsyncComponent></AsyncComponent>
  </div>
</template>

<script>
// import AsyncComponent from "./components/AsyncComponent.vue";
import getAsyncComponent from "./utils/getAsyncComponent";
const AsyncComponent = getAsyncComponent("../components/AsyncComponent.vue");
export default {
  name: "App",
  components: {
    AsyncComponent,
  },
};
</script>

<style scoped>
.app-container {
  height: 50%;
  width: 50%;
  margin: 3em auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>