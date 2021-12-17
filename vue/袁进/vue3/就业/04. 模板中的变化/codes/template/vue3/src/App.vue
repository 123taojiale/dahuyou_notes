<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <div class="list">
        <CheckboxEditor v-for="product in productList" />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <ol class="list">
        <li class="item" v-for="product in productList">
          <strong>{{ product.name }}</strong>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import CheckboxEditor from "./components/CheckboxEditor.vue";
import productList from "./data/productList.json";
import { ref } from "vue";

// console.table(productList);

export default {
  name: "App",
  components: {
    CheckboxEditor,
  },
  setup() {
    const productListRef = ref(productList);
    return {
      productList: productListRef,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  margin-top: 50px;
  width: 880px;
  margin: 50px auto;

  .list {
    display: flex;
    margin: 1em 0;
    align-items: center;

    .item + .item {
      margin-left: 2em;
    }
  }

  strong {
    flex: none;
    margin-right: 1em;
  }
}
</style>
