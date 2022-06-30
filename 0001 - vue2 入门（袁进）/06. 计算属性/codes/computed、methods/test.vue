<template>
  <div class="test-container">
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>全名：{{ firstName + " " + lastName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "da",
      lastName: "huyou",
    };
  },
};
</script>