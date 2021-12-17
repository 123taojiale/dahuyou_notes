<template>
  <h1>商品信息管理系统</h1>
  <table>
    <thead>
      <tr>
        <th>商品名称</th>
        <th>库存</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, i) in productList" :key="product.id">
        <td>{{ product.name }}</td>
        <td>
          <button @click="decreaseStock(product, product.stock - 1)">-</button>
          <span class="stock">{{
            product.stock === 0 ? "null" : product.stock
          }}</span>
          <button @click="product.stock++">+</button>
        </td>
        <td><button @click="deleteProduct(i)">delete</button></td>
      </tr>
    </tbody>
  </table>
  <p>总库存：{{ total }}</p>
</template>

<script>
import productList from "./data/products.json";
import { ref } from "vue";
import useGetTotal from "./composition/useGetTotal.js";
import useDecreaseStock from "./composition/useDecreaseStock.js";
import useDeleteProduct from "./composition/useDeleteProduct.js";

export default {
  setup() {
    let productListRef = ref(productList);

    return {
      productList: productListRef,
      ...useGetTotal(productListRef),
      ...useDecreaseStock(),
      ...useDeleteProduct(productListRef)
    };
  },
};
</script>

<style scoped>
::selection {
  background-color: lightblue;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,td {
  border: 1px solid #ddd;
}
.stock {
  display: inline-block;
  width: 2em;
}
</style>
