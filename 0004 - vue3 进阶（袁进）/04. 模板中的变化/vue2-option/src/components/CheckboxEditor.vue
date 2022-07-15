<template>
  <div class="check-editor">
    <div class="check-editor-inner">
      <div
        class="checkbox"
        :class="{ checked: is_selling }"
        @click="checkedChanged"
      ></div>
      <input type="text" class="editor" v-model="productName" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["product_name", "is_selling"],
  data() {
    return {
      productName: "",
    };
  },
  mounted() {
    this.productName = this.product_name;
  },
  methods: {
    // 通知父组件修改了商品的选中状态，并将当前的选中状态作为参数传递给父组件。
    checkedChanged() {
      this.$emit("checkedChanged", !this.is_selling);
    },
  },
  watch: {
    // 通知父组件修改了商品名称，并将新的商品名称作为参数传递给父组件。
    productName(newName) {
      this.$emit("nameChanged", newName);
    },
  },
};
</script>

<style scoped lang="less">
.check-editor {
  cursor: pointer;

  .check-editor-inner {
    display: flex;
    align-items: center;

    .checkbox {
      width: 15px;
      height: 15px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      border-radius: 3px;
      transition: 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &.checked {
        border-color: #409eff;
      }

      &.checked::after {
        content: "";
        border-radius: 2px;
        width: 9px;
        height: 9px;
        background: #409eff;
      }
    }

    .editor {
      border: none;
      outline: none;
      margin-left: 5px;
      border-bottom: 1px solid #dcdfe6;
      font-size: inherit;
    }
  }
}
</style>
