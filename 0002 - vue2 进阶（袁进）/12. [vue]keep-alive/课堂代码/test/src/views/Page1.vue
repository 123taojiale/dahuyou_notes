<template>
  <div class="page-container">
    <div class="title">
      <!-- page2、page3 完全相同，无非就是将文本 page1 改为了 page2、page3 -->
      <h1>This is page1</h1>
    </div>
    <div class="form-container">
      <input type="text" placeholder="Input text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "page1"
}
</script>

<style lang="less" scoped>
.page-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form-container input {
  width: 20rem;
  height: 2rem;
  font-size: 1.2rem;
}
</style>