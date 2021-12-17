<template>
  <div class="test-container">
    <p>姓：{{ firstName }}</p>
    <p>名：{{ lastName }}</p>
    <p>全名：{{ getFullName(firstName, lastName) }}</p>
    <p>全名：{{ getFullName(firstName, lastName) }}</p>
    <p>全名：{{ getFullName(firstName, lastName) }}</p>
    <p>全名：{{ getFullName(firstName, lastName) }}</p>
    <p>全名：{{ getFullName(firstName, lastName) }}</p>
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
  methods: {
    getFullName(first, last) {
      console.log("getFullName called");
      return first + " " + last;
    },
  },
};
</script>