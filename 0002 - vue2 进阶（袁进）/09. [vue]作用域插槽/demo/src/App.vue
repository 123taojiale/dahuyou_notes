<template>
  <div id="app">
    <async-content :contentPromise="fetchProducts()">
      <template #loading>加载中...</template>
      <template v-slot:default="{ content }">
        <!-- 这个 content 是子组件中的数据
        子组件中通过 v-bind:content="xxx" 将 xxx 数据传递给父组件
        这样在父组件的作用域中就可以访问到子组件作用域中的数据了 -->
        <ul>
          <li v-for="item in content" :key="item.id">
            商品名：{{ item.name }} 库存：{{ item.stock }}
          </li>
        </ul>
      </template>
      <template v-slot:error="{ error }">
        <p style="color:red">{{ error.message }}</p>
      </template>
    </async-content>
  </div>
</template>

<script>
import AsyncContent from "./components/AsyncContent.vue";
// ajax模拟函数
function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve([
          { id: 1, name: "xiaomi", stock: 50 },
          { id: 2, name: "iphone", stock: 70 },
          { id: 3, name: "huawei", stock: 60 },
        ]);
      } else {
        reject(new Error("not found"));
      }
    }, 500);
  });
}

export default {
  components: { AsyncContent },
  methods: {
    async fetchProducts() {
      return await getProducts();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 500px;
  margin: 1em auto;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
