<template>
  <div id="app">
    <AsyncContentVue :fetchData="fetchData">
      <template #loading>
        <div class="loading">Loading</div>
      </template>
      <template #success="{ data }">
        <div class="success">
          <p v-for="item in data" :key="item.id">
            {{ item.name }} - {{ item.stock }}
          </p>
        </div>
      </template>
      <template #error="{ err }">
        <div class="error">{{ err.message }}</div>
      </template>
    </AsyncContentVue>
  </div>
</template>

<script>
import AsyncContentVue from "./components/AsyncContent.vue";

function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function fetchData() {
  await delay(500);
  // 模拟 - 请求成功获取到业务数据
  if (Math.random() < 0.5) {
    return [
      { id: 1, name: "xiaomi", stock: 50 },
      { id: 2, name: "iphone", stock: 70 },
      { id: 3, name: "huawei", stock: 60 },
    ];
  } else {
    throw new Error("请求业务数据失败！！！");
  }
}

export default {
  name: "App",
  components: {
    AsyncContentVue,
  },
  data() {
    return {
      fetchData,
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  border: 1px solid #2c3e50;
  width: 20rem;
  padding: 1rem 0;

  .loading {
    color: #ddd;
  }

  .error {
    color: #f40;
  }

  .success {
    color: #008c8c;
  }
}
</style>
