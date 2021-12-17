<template>
  <div class="app-container">
    <h1>标题：商品信息管理系统</h1>
    <ul>
      <li v-for="(item, i) in products" :key="item.id">
        商品名称：{{ item.name }} 商品库存：
        <button @click="changeStock(item, item.stock - 1)">-</button>
        {{ item.stock ? item.stock : "无货" }}
        <button @click="changeStock(item, item.stock + 1)">+</button>
        <button @click="removeProduct(i)">remove</button>
      </li>
    </ul>
    <p>总库存：{{ total }}</p>
  </div>
</template>

<style scoped>
::selection {
  background-color: #008c8c33;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      products: [
        {
          name: "huawei",
          stock: 10,
          id: "1",
        },
        {
          name: "iphone",
          stock: 9,
          id: "2",
        },
        {
          name: "xiaomi",
          stock: 8,
          id: "3",
        },
      ],
    };
  },
  computed: {
    total() {
      return this.products.reduce((sum, item) => sum + item.stock, 0);
    },
  },
  methods: {
    changeStock(item, newStock) {
      // 先判断越界的情况
      if (newStock < 0) {
        return;
      }
      item.stock = newStock;
    },
    removeProduct(i) {
      this.products.splice(i, 1);
    },
  },
};
</script>
