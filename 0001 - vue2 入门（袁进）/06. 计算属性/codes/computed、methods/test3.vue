<template>
  <div class="test-container">
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>全名：{{ getFullName }}</p>
    <p>全名：{{ getFullName }}</p>
    <p>全名：{{ getFullName }}</p>
    <p>全名：{{ getFullName }}</p>
    <p>全名：{{ getFullName }}</p>
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
  computed: {
    getFullName() {
      console.log("getFullName called");
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
