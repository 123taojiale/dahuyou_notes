<template>
  <div>
    <button @click="handleClick" :disabled="isLoading">
      {{ isLoading ? "loading" : "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
    },
  },
  data() {
    return {
      count: 0, // 点击的次数
      isLoading: false,
      error: "",
    };
  },
  methods: {
    async handleClick() {
      this.count++;
      this.isLoading = true;
      this.error = "";
      // 通知父组件
      this.error = await this.click(this.count);
      this.isLoading = false;
    },
  },
};
</script>

<style>
.err {
  color: #f40;
  font-size: 12px;
}
</style>
