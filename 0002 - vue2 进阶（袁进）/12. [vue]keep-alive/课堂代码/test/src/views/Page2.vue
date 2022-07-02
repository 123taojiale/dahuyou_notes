<template>
  <div class="page-container">
    <div class="title">
      <h1>This is page2</h1>
    </div>
    <div class="form-container">
      <input type="text" placeholder="Input text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "page2"
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
