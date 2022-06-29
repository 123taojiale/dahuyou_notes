<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <div class="list">
        <CheckboxEditor
          v-for="product in productList"
          :key="product.id"
          :product_name="product.name"
          :is_selling="product.sell"
          @checkedChanged="handleCheckedChange($event, product)"
          @nameChanged="handleNameChange($event, product)"
        />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <ol class="list">
        <!-- 方式1
        推荐使用 方式1 的方式来实现，方式1 的效率更高。 -->
        <!-- <li class="item" v-for="product in filteredProductList" :key="product.id">
          <strong>{{ product.name }}</strong>
        </li> -->
        <!-- 方式2 -->
        <li
          class="item"
          v-for="product in productList"
          :key="product.id"
          v-show="product.sell"
        >
          <strong>{{ product.name }}</strong>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import CheckboxEditor from "./components/CheckboxEditor.vue";

export default {
  name: "App",
  components: {
    CheckboxEditor,
  },
  data() {
    return {
      productList: [
        { id: 1, sell: true, name: "iphone12" },
        { id: 2, sell: false, name: "xiaomi" },
        { id: 3, sell: true, name: "huawei" },
        { id: 4, sell: true, name: "vivo" },
      ],
    };
  },
  methods: {
    handleCheckedChange(newStatus, product) {
      product.sell = newStatus;
    },
    handleNameChange(newName, product) {
      product.name = newName;
    },
  },
  /* computed: {
    filteredProductList() {
      return this.productList.filter((product) => product.sell === true);
    },
  }, */
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
